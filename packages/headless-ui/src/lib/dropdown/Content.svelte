<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { DropdownMenuContext } from './index.js';

	let className: string = '';
	export { className as class };

	let contentRef: HTMLDivElement;
	const handleOutsideClick = (event: MouseEvent) => {
		if (
			$isOpen &&
			contentRef &&
			!contentRef.contains(event.target as Node) &&
			triggerElement &&
			!triggerElement.contains(event.target as Node)
		) {
			close();
		}
	};

	onMount(() => {
		document.addEventListener('click', handleOutsideClick, true);

		return () => {
			document.removeEventListener('click', handleOutsideClick, true);
		};
	});

	const { isOpen, close, triggerElement } = getContext<DropdownMenuContext>('dropdownMenu');
</script>

{#if $isOpen}
	<div
		tabindex="-1"
		class={`svelte-solana-dropdown-content ${className}`}
		role="menu"
		aria-labelledby="dropdown-button"
		bind:this={contentRef}
	>
		<slot />
	</div>
	<style>
	</style>
{/if}
