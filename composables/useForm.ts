import { reactive, ref, toRaw } from "vue";
import * as Yup from "yup";

export function useForm<T extends Record<string, any>>(
  schema: Yup.ObjectSchema<T>,
  initialValues: T
) {
  const values = reactive<T>({ ...initialValues });
  const errors = reactive<Record<keyof T, string | null>>(
    {} as Record<keyof T, string | null>
  );
  const isSubmitting = ref(false);

  const resetErrors = () => {
    for (const key in errors) {
      errors[key] = null;
    }
  };

  const validate = async (): Promise<boolean> => {
    resetErrors();
    try {
      await schema.validate(toRaw(values), { abortEarly: false });
      return true;
    } catch (validationError: any) {
      if (validationError.inner) {
        validationError.inner.forEach((err: Yup.ValidationError) => {
          const path = err.path as keyof T;
          if (path && errors.hasOwnProperty(path)) {
            errors[path] = err.message;
          }
        });
      }
      return false;
    }
  };

  const handleSubmit = async (onSubmit: (values: T) => Promise<void>) => {
    isSubmitting.value = true;
    const isValid = await validate();

    if (isValid) {
      await onSubmit(toRaw(values));
    }

    isSubmitting.value = false;
  };

  return {
    values,
    errors,
    isSubmitting,
    handleSubmit,
  };
}
