<script setup lang="ts">
import * as Yup from "yup";
import { nanoid } from "nanoid";

defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: "close", result?: { message: string }): void;
}>();

function emitCloseEvent() {
  emit("close", { message: "User closed contact modal" });
}

const message = ref("");
const interestOptions = [
  {
    id: nanoid(),
    text: "Autre projet ou question générale",
    value: "Autre projet ou question générale",
  },
  {
    id: nanoid(),
    text: "Villas Brumes – Investissez dans un style de vie moderne",
    value: "Villas Brumes",
  },
  {
    id: nanoid(),
    text: "Horizon Prima – Résidences urbaines et fonctionnelles",
    value: "Horizon Prima",
  },
];

const selectedInterest = ref(interestOptions[0]?.value);

const schema = Yup.object({
  name: Yup.string().required("Le nom complet est obligatoire."),
  email: Yup.string()
    .email("Entrez un email valide.")
    .required("L'email est obligatoire."),
  phoneNumber: Yup.string().required(
    "Le numéroe de téléphone est obligatoire. "
  ),
  interestOption: Yup.string().required("Ce champs est obligatoire."),
});

const error = "Une erreur est survenue";

const {
  values: ContactForm,
  errors,
  isSubmitting,
  handleSubmit,
} = useForm(schema, {
  name: "",
  email: "",
  phoneNumber: "",
  interestOption: interestOptions[0].value,
});
</script>

<template>
  <div class="relative">
    <div class="p-10">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 sm:mt-0 text-[#171717]">
          <h3 class="text-2xl font-semibold text-[#171717]" id="modal-title">
            Contactez-nous dès maintenant
          </h3>
          <div class="mt-6">
            <p class="text-base text-[#171717] font-light">
              Une question, un projet, ou simplement une envie d’en savoir plus
              ?
              <br />
              Notre équipe est là pour vous accompagner dans chaque étape de
              votre investissement.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#fafafa] p-10 border-t border-[#eaeaea]">
      <div class="grid grid-cols-1 gap-x-6 gap-y-8">
        <div>
          <label
            for="first-name"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Nom complet
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autocomplete="given-name"
              v-model="ContactForm.name"
              class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium">E-mail</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              v-model="ContactForm.email"
              class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label for="phone-number" class="block text-sm/6 font-medium">
            Téléphone
          </label>
          <div class="mt-2">
            <BaseInput
              id="phone-number"
              name="phone-number"
              autocomplete="phone-number"
              v-model="ContactForm.phoneNumber"
            ></BaseInput>
          </div>
        </div>

        <div>
          <label
            for="interest"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Vous êtes intéressé(e) par :
          </label>
          <div class="mt-2 grid grid-cols-1">
            <select
              id="interest"
              name="interest"
              v-model="ContactForm.interestOption"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            >
              <option
                v-for="option in interestOptions"
                :id="option.id"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
            <svg
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <label
              for="message"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Votre message
            </label>
          </div>
          <div class="mt-1">
            <textarea
              name="message"
              id="message"
              rows="4"
              v-model="message"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
