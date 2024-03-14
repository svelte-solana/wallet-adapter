import type { Writable } from "svelte/store";

export interface DropdownMenuContext {
  isOpen: Writable<boolean>;
  open: () => void;
  close: () => void;
  triggerElement: HTMLElement | null;
}

export { default as Root } from "./Root.svelte";
export { default as Content } from "./Content.svelte";
export { default as Trigger } from "./Trigger.svelte";
export { default as Item } from "./Item.svelte";

