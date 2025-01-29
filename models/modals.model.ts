import type { Component } from "vue";

export interface BaseModalProps {
  // Common properties across modals go here
}

export interface ModalInstance<TProps extends BaseModalProps = BaseModalProps> {
  id: string;
  component: Component;
  props?: TProps;
  resolve?: (value?: unknown) => void;
  reject?: (reason?: unknown) => void;
  closeOnOverlayClick?: boolean;
}
