<script lang="ts">
	import { getContext } from 'svelte';
	import type { DropdownMenuContext } from './index.js';

	let className: string = '';
	export { className as class };

	const { close } = getContext<DropdownMenuContext>('dropdownMenu');

	let itemRef: HTMLDivElement;

	function handleClick() {
		close();
	}
</script>

<div
	role="menuitem"
	class={`svelte-solana-dropdown-item ${className}`}
	tabindex="-1"
	bind:this={itemRef}
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
	<slot />
</div>
