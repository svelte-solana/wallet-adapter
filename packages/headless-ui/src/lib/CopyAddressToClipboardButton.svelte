<script lang="ts">
	import { walletStore, copyAddressToClipboard } from '@svelte-solana/core';

	let promise = Promise.resolve(false);

	let className: string = '';
	export { className as class };
	export let disabled: boolean = false;

	export let defaultString = 'Copy';
</script>

<button
	class={className}
	{disabled}
	on:click={() => {
		promise = copyAddressToClipboard($walletStore);
	}}
>
	{#await promise}
		Copying
	{:then}
		{defaultString}
	{/await}
</button>
