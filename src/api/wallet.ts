import { WalletType } from "@/types/wallet.type";

export const getWallet = async (): Promise<WalletType> => {
  const res = await fetch("https://fe-task-api.mainstack.io/wallet");
  if (!res.ok) throw new Error("Failed to fetch wallet data. Please try again");
  const wallet = await res.json();

  return wallet;
};
