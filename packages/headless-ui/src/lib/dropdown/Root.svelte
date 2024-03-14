<script lang="ts">
	import { createEventDispatcher, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { type DropdownMenuContext } from './index.js';
	import "../style.css";

	export let open = false;
	export let name = 'dropdownMenu';

	let className: string = '';
	export { className as class };

	let triggerElement: HTMLElement | null = null;

	interface ComponentEvent {
		open: void;
		close: void;
	}

	const dispatch = createEventDispatcher<ComponentEvent>();

	const isOpen = writable(open);

	const dropdownMenuContext: DropdownMenuContext = {
		isOpen,
		triggerElement,
		open: () => {
			$isOpen = true;
			dispatch('open');
		},
		close: () => {
			$isOpen = false;
			dispatch('close');
		}
	};
	setContext<DropdownMenuContext>(name, dropdownMenuContext);

	$: if (triggerElement) {
		dropdownMenuContext.triggerElement = triggerElement;
		setContext<DropdownMenuContext>(name, dropdownMenuContext);
	}

	onMount(() => {
		document.addEventListener('keydown', closeOnEscape);

		return () => document.removeEventListener('keydown', closeOnEscape);
	});

	function closeOnEscape(e: KeyboardEvent) {
		if (e.key === 'Escape') dropdownMenuContext.close();
	}
</script>

<div bind:this={triggerElement} class={`svelte-solana-dropdown-root ${className}`}>
	<slot />
</div>

<style>
</style>
