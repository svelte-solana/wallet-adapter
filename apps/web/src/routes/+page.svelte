<script lang="ts">
	import { WalletMultiButton } from '@svelte-solana/ui';
	import { walletStore } from '@svelte-solana/core';

	$: if ($walletStore.connected) {
		console.log('Connected to wallet: ', $walletStore.adapter?.name);
	}
</script>

<h1>Web</h1>

<WalletMultiButton />
<button>Yolo</button>
