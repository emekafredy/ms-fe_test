// components
import { WalletInfo } from "./WalletInfo";
import { TransactionsList } from "./TransactionsList";

// others
import { getTransactions } from "@/api/transactions";

export const RevenueComponent = async () => {
  const transactions = await getTransactions();

  return (
    <>
      <WalletInfo />
      <TransactionsList transactions={transactions} />
    </>
  );
};
