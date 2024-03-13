import type { WalletName } from "@solana/wallet-adapter-base";
import type { Wallet, WalletStore } from "./walletStore.js";

export function getWalletAddressSliced(store: WalletStore): string | null {
    const {publicKey, wallet} = store
    const base58 = publicKey?.toBase58();
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + '..' + base58.slice(-4);
}

export function getConnectionStatus(store: WalletStore): "Connected" | "Connecting" | "Disconnecting" | "Not Connected" {
    const { connected, connecting, disconnecting } = store;
    if(connected) return "Connected"
    if(connecting) return "Connecting"
    if(disconnecting) return "Disconnecting"
    return "Not Connected"
}

export async function connect(store: WalletStore, walletName: WalletName) {
    store.select(walletName)
    await store.connect()
}

export async function copyAddressToClipboard(store: WalletStore): Promise<boolean> {
  try {
    if (!store.publicKey) return false;
    await navigator.clipboard.writeText(store.publicKey.toString());
    return true; // Indicates success
  } catch (error) {
    return false; // Indicates failure
  }
};

export function isWalletDetected(wallet: Wallet): boolean {
  return wallet.readyState === "Installed"
}
