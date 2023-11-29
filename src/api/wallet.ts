import { WalletType } from "@/types/wallet.type";

export const getWallet = async (): Promise<WalletType> => {
  const data = await fetch("https://fe-task-api.mainstack.io/wallet");
  const wallet = await data.json();

  return wallet;
};
