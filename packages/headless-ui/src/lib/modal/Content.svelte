<script lang="ts">
	import { getContext } from 'svelte';
	import type { ModalContext } from './index.js';

	const { isOpen } = getContext<ModalContext>('modal');
</script>

{#if $isOpen}
	<div class="svelte-solana-modal-content">
		<slot />
	</div>
	<style>
		.svelte-solana-modal-content {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: white;
			padding: 1rem;
			border-radius: 4px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		}
	</style>
{/if}

