<script lang="ts">
	import { getContext } from 'svelte';
	import { type DropdownMenuContext } from './index.js';

	let className: string = '';
	export { className as class };

	const { open, isOpen, close } = getContext<DropdownMenuContext>('dropdownMenu');
</script>

<button
	class={`svelte-solana-dropdown-trigger ${className}`}
	on:click={() => ($isOpen ? close() : open())}
	aria-haspopup="true"
	aria-expanded={$isOpen}
>
	<slot />
</button>

<style>
</style>
