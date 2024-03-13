<script lang="ts">
	import { walletStore, getWalletAddressSliced } from '@svelte-solana/core';

	let className: string = '';
	export { className as class };
</script>

<p class={className}>
	{getWalletAddressSliced($walletStore)}
</p>
