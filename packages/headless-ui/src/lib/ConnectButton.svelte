<script lang="ts">
	import { walletStore, type Wallet, connect } from '@svelte-solana/core';

	let className: string = '';
	export { className as class };
	export let disabled: boolean = false;

	export let wallet: Wallet;
</script>

<button
	class={className}
	{disabled}
	{...$$restProps}
	on:click={() => connect($walletStore, wallet.adapter.name)}
>
	<slot />
</button>
