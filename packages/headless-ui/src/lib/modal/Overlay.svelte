<script lang="ts">
	import { getContext } from 'svelte';
	import type { ModalContext } from './index.js';

	let className: string = '';
	export { className as class };

	const { close, isOpen } = getContext<ModalContext>('modal');
</script>

{#if $isOpen}
	<button
		class={`svelte-solana-modal-overlay ${className}`}
		on:click={close}
		on:keydown={(e) => e.key === 'Escape' && close()}
	/>
	<style>
	</style>
{/if}
