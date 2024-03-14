<script lang="ts">
	import { WalletMultiButton } from '@svelte-solana/ui';
	import { walletStore } from '@svelte-solana/core';
	import { WalletConnectButton, CopyAddressToClipboardButton } from '@svelte-solana/headless-ui';
	import { Modal, DropdownMenu } from '@svelte-solana/headless-ui';

	$: if ($walletStore.connected) {
		console.log('Connected to wallet: ', $walletStore.adapter?.name);
	}
	$: console.log($walletStore.wallets);
</script>

<h1>Web</h1>

<div>
	<WalletMultiButton />
	<CopyAddressToClipboardButton />
	<WalletConnectButton wallet={$walletStore.wallets[0]}>Connect</WalletConnectButton>
</div>

<!-- <Modal.Root> -->
<!-- 	<Modal.Overlay /> -->
<!-- 	<Modal.Trigger>Open</Modal.Trigger> -->
<!-- 	<Modal.Content> -->
<!-- 		list of wallets here -->
<!-- 		<Modal.Close>Close</Modal.Close> -->
<!-- 	</Modal.Content> -->
<!-- </Modal.Root> -->

<DropdownMenu.Root>
	<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		list of wallets here
		<DropdownMenu.Item>Item</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
