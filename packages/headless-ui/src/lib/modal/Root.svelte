<script lang="ts">
	import { createEventDispatcher, onMount, setContext } from 'svelte';
	import { type ModalContext } from './index.js';
	import { writable } from 'svelte/store';
	import "../style.css";

	export let open = false;
	export let name = 'modal';

	interface ComponentEvent {
		open: void;
		close: void;
	}

	const dispatch = createEventDispatcher<ComponentEvent>();

	let isOpen = writable(open);

	const modalContext: ModalContext = {
		isOpen,
		open: () => {
			$isOpen = true;
			dispatch('open');
		},
		close: () => {
			$isOpen = false;
			dispatch('close');
		}
	};
	setContext<ModalContext>(name, modalContext);

	onMount(() => {
		document.addEventListener('keydown', closeOnEscape);

		return () => document.removeEventListener('keydown', closeOnEscape);
	});

	function closeOnEscape(e: KeyboardEvent) {
		if (e.key === 'Escape') modalContext.close();
	}
</script>

<slot />

<style>
</style>
