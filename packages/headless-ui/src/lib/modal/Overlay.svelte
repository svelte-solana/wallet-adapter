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
		.svelte-solana-modal-overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}
	</style>
{/if}
