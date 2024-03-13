<script lang="ts">
	import type { Wallet } from '@svelte-solana/core';

	export let wallet: Wallet;

	let className: string = '';
	export { className as class };
</script>

<p class={className}>{wallet.adapter.name}</p>
