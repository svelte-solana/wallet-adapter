<script lang="ts">
	import { walletStore } from '@svelte-solana/core';

	let className: string = '';
	export { className as class };
	export let disabled: boolean = false;
</script>

<button class={className} on:click={() => $walletStore.disconnect()} {disabled}>
	<slot>Disconnect</slot>
</button>
