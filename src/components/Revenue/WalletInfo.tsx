import { WalletType } from "@/types/wallet.type";

// components
import { Chart } from "./Chart";
import { TransactionsSummary } from "./TransactionsSummary";

const getWallet = async (): Promise<WalletType> => {
  const data = await fetch("https://fe-task-api.mainstack.io/wallet");
  const wallet = await data.json();

  return wallet;
};

export const WalletInfo = async () => {
  const wallet = await getWallet();

  return (
    <div className="flex flex-col md:flex-row mt-44 gap-8">
      <Chart balance={wallet.balance} />
      <TransactionsSummary wallet={wallet} />
    </div>
  );
};
