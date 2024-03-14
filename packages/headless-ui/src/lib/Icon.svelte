<script lang="ts">
	import type { Wallet } from '@svelte-solana/core';
	import './style.css';

	export let wallet: Wallet;
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;

	let className: string = '';
	export { className as class };
</script>

<img {width} {height} class={className} src={wallet.adapter.icon} alt={wallet.adapter.name} />
