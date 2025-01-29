<script setup lang="ts">
import { useModalManager } from "~/composables/useModalManager";
const { modal, closeModal } = useModalManager();

function onOverlayClick() {
  if (modal.value?.closeOnOverlayClick) {
    closeModal();
  }
}

function trapFocus(event: KeyboardEvent) {
  const modalElement = event.currentTarget as HTMLElement;

  const focusableElements = modalElement.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey && document.activeElement === firstElement) {
      lastElement?.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      firstElement?.focus();
      event.preventDefault();
    }
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modal"
      class="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      tabindex="0"
      @keydown="trapFocus"
    >
      <transition
        tag="div"
        name="modal"
        appear
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed inset-0 bg-[#000]/60"
          aria-hidden="true"
          key="backdrop"
          @click="onOverlayClick"
        ></div>
      </transition>

      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="relative w-full max-w-lg rounded-t-lg sm:rounded-lg bg-white sm:max-w-2xl max-h-[600px] overflow-y-auto"
          style="box-shadow: inset 0 0 0 1px #00000014"
        >
          <component
            :is="modal.component"
            v-bind="modal.props"
            @close="closeModal"
          />
        </div>
      </transition>
    </div>
  </Teleport>
</template>
