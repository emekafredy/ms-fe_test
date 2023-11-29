import { WalletType } from "@/types/wallet.type";
import { TransactionDetailsType } from "@/types/transactions.type";

// components
import { ChartComponent } from "./Chart";
import { TransactionsSummary } from "./TransactionsSummary";

const getWallet = async (): Promise<WalletType> => {
  const data = await fetch("https://fe-task-api.mainstack.io/wallet");
  const wallet = await data.json();

  return wallet;
};

const getTransactions = async (): Promise<TransactionDetailsType[]> => {
  const data = await fetch("https://fe-task-api.mainstack.io/transactions");
  const transactions = await data.json();
  return transactions;
};

export const WalletInfo = async () => {
  const wallet = await getWallet();
  const transactions = await getTransactions();

  return (
    <div className="flex flex-col md:flex-row mt-44 gap-8 items-center">
      <ChartComponent balance={wallet.balance} transactions={transactions} />
      <TransactionsSummary wallet={wallet} />
    </div>
  );
};
