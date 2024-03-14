<script lang="ts">
	import { walletStore, copyAddressToClipboard } from '@svelte-solana/core';
	import "./style.css";

	let className: string = '';
	export { className as class };
	export let disabled: boolean = false;
	export let delay: number = 500

	let state: "IDLE" | "COPYING" | "SUCCESS" | "FAILURE" = "IDLE";
</script>

<button
	class={className}
	{disabled}
	on:click={async () => {
		state = "COPYING";
		const response = await copyAddressToClipboard($walletStore);

		if (response) {
			state = "SUCCESS";
		} else {
			state = "FAILURE";
		}
	
		setTimeout(() => {
			state = "IDLE";
		}, delay);
	}}
>
	{#if state === "IDLE"}
		<slot>
			Copy
		</slot>
	{:else if state === "COPYING"}
		<slot name="copying">
			Copying
		</slot>
	{:else if state === "SUCCESS"}
		<slot name="success">
			Copied
		</slot>
	{:else if state === "FAILURE"}
		<slot name="failure">
			Failed
		</slot>
	{/if}
</button>
