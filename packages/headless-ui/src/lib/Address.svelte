<script lang="ts">
	import { walletStore, getWalletAddressSliced } from '@svelte-solana/core';
	import "./style.css";

	let className: string = '';
	export { className as class };
</script>

<p class={className}>
	{getWalletAddressSliced($walletStore)}
</p>
