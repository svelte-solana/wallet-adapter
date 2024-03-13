import type { Action } from "svelte/action";
interface CallbackType {
    (arg?: string): void;
}

export const clickOutside: Action<HTMLElement, CallbackType>  = (node: HTMLElement, callbackFunction) => {
    function onClick(event: MouseEvent) {
        if (
            node &&
            event.target instanceof Node &&
            !node.contains(event.target) &&
            !event.defaultPrevented
        ) {
            callbackFunction();
        }
    }

    document.body.addEventListener('click', onClick, true);

    return {
        update(newCallbackFunction: CallbackType) {
            callbackFunction = newCallbackFunction;
        },
        destroy() {
            document.body.removeEventListener('click', onClick, true);
        }
    };
}
