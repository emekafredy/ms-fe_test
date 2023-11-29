// components
import { WalletInfo } from "./WalletInfo";
import { TransactionsList } from "./TransactionsList";

// others
import { TransactionDetailsType } from "@/types/transactions.type";

const getTransactions = async (): Promise<TransactionDetailsType[]> => {
  const data = await fetch("https://fe-task-api.mainstack.io/transactions");
  const transactions = await data.json();

  return transactions;
};

export const RevenueComponent = async () => {
  const transactions = await getTransactions();

  return (
    <>
      <WalletInfo />
      <TransactionsList transactions={transactions} />
    </>
  );
};
