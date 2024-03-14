<script lang="ts">
	import { walletStore, getWalletAddressSliced, getConnectionStatus } from '@svelte-solana/core';
	import "./style.css";

	let className: string = '';
	export { className as class };
	export let disabled: boolean = false;

	$: status = getConnectionStatus($walletStore);
	export let defaultString = 'Select Wallet';
</script>

<button class={className} on:click {disabled}>
	{#if status === 'Connected'}
		{getWalletAddressSliced($walletStore)}
	{:else if status === 'Not Connected'}
		{defaultString}
	{:else}
		{status}
	{/if}
</button>
