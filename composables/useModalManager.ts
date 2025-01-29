import { ref, computed, markRaw } from "vue";
import { nanoid } from "nanoid";
import type { Component } from "vue";

const modal = ref<{
  id: string;
  component: Component;
  props?: Record<string, any>;
  closeOnOverlayClick: boolean;
} | null>(null);

let previouslyFocusedElement: HTMLElement | null = null;

export function useModalManager() {
  function openModal(
    component: Component,
    props: Record<string, any> = {},
    options: { closeOnOverlayClick?: boolean } = {}
  ) {
    if (modal.value) {
      console.warn("A modal is already open.");
      return;
    }

    previouslyFocusedElement = document.activeElement as HTMLElement;

    document.body.classList.add("overflow-hidden");

    modal.value = {
      id: nanoid(),
      component: markRaw(component),
      props,
      closeOnOverlayClick: options.closeOnOverlayClick ?? true,
    };

    setTimeout(() => {
      const modalElement = document.querySelector(
        "[role='dialog']"
      ) as HTMLElement;
      modalElement?.focus();
    }, 0);
  }

  function closeModal() {
    if (modal.value) {
      modal.value = null;

      document.body.classList.remove("overflow-hidden");

      previouslyFocusedElement?.focus();

      document.activeElement === previouslyFocusedElement;

      previouslyFocusedElement = null;
    }
  }

  return {
    modal: computed(() => modal.value),
    openModal,
    closeModal,
  };
}
