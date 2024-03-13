<script lang="ts">
	import { clusterApiUrl } from '@solana/web3.js';
	import { WalletProvider, type Adapter } from '@svelte-solana/ui';
	import { onMount } from 'svelte';

	const localStorageKey = 'walletAdapter';
	const network = clusterApiUrl('devnet');

	let wallets: Adapter[];

	onMount(async () => {
		const { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } = await import(
			'@solana/wallet-adapter-wallets'
		);

		const walletsMap = [
			// new PhantomWalletAdapter(),
			// new SolflareWalletAdapter(),
			// new TorusWalletAdapter()
		];

		wallets = walletsMap;
	});
</script>

<WalletProvider {localStorageKey} {wallets} autoConnect />
<slot />
