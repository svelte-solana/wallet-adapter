<script lang="ts">
	import { type Wallet, isWalletDetected } from '@svelte-solana/core';

	export let wallet: Wallet;

	let className: string = '';
	export { className as class };
</script>

<p class={className}>
	{#if isWalletDetected(wallet)}
		<slot>Detected</slot>
	{:else}
		<slot name="none">Not detected</slot>
	{/if}
</p>
