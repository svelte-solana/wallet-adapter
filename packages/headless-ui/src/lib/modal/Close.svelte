<script lang="ts">
	import { getContext } from 'svelte';
	import type { ModalContext } from './index.js';

	let className: string = '';
	export { className as class };

	const { close } = getContext<ModalContext>('modal');
</script>

<button on:click={close} class={`svelte-solana-modal-close ${className}`}>
	<slot />
</button>
