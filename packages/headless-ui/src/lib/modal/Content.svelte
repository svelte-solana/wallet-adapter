<script lang="ts">
	import { getContext } from 'svelte';
	import type { ModalContext } from './index.js';

	let className: string = '';
	export { className as class };

	const { isOpen } = getContext<ModalContext>('modal');
</script>

{#if $isOpen}
	<div class={`svelte-solana-modal-content ${className}`}>
		<slot />
	</div>
	<style>
	</style>
{/if}
