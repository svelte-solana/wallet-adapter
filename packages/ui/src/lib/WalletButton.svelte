<script lang="ts">
	export let disabled: boolean = false;

	let className: string = '';
	export { className as class };
</script>

<button
	class="wallet-adapter-button {className}"
	style={`justify-content: space-between;`}
	{disabled}
	on:click
>
	{#if $$slots['start-icon']}
		<i class="wallet-adapter-button-start-icon">
			<slot name="start-icon" />
		</i>
	{/if}
	<slot />
	<span>
		<slot name="status" />
	</span>
</button>

<!-- <style> -->
<!-- 	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'); -->
<!-- 	.wallet-adapter-button { -->
<!-- 		background-color: transparent; -->
<!-- 		border: none; -->
<!-- 		color: #fff; -->
<!-- 		cursor: pointer; -->
<!-- 		display: flex; -->
<!-- 		align-items: center; -->
<!-- 		font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif; -->
<!-- 		font-size: 16px; -->
<!-- 		font-weight: 600; -->
<!-- 		height: 48px; -->
<!-- 		line-height: 48px; -->
<!-- 		padding: 0 24px; -->
<!-- 		border-radius: 4px; -->
<!-- 	} -->
<!---->
<!-- 	.wallet-adapter-button-end-icon, -->
<!-- 	.wallet-adapter-button-start-icon, -->
<!-- 	.wallet-adapter-button-end-icon img, -->
<!-- 	.wallet-adapter-button-start-icon img { -->
<!-- 		display: flex; -->
<!-- 		align-items: center; -->
<!-- 		justify-content: center; -->
<!-- 		width: 24px; -->
<!-- 		height: 24px; -->
<!-- 	} -->
<!---->
<!-- 	.wallet-adapter-button-end-icon { -->
<!-- 		margin-left: 12px; -->
<!-- 	} -->
<!-- </style> -->
