<script lang="ts">
	import { getContext } from 'svelte';
	import { type ModalContext } from './index.js';

	let className: string = '';
	export { className as class };

	const { open } = getContext<ModalContext>('modal');
</script>

<button class={`svelte-solana-modal-trigger ${className}`} on:click={open}>
	<slot />
</button>

<style>
</style>
