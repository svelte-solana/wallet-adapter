import type { Writable } from "svelte/store";

export interface ModalContext {
  isOpen: Writable<boolean>;
  open: () => void;
  close: () => void;
}

export { default as Root } from "./Root.svelte";
export { default as Content } from "./Content.svelte";
export { default as Close } from "./Close.svelte";
export { default as Overlay } from "./Overlay.svelte";
export { default as Trigger } from "./Trigger.svelte";

