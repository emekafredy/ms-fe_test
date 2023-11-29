import { WalletType } from "@/types/wallet.type";
import { TransactionDetailsType } from "@/types/transactions.type";

// components
import { ChartComponent } from "./Chart";
import { TransactionsSummary } from "./TransactionsSummary";

// others
import { getWallet } from "@/api/wallet";
import { getTransactions } from "@/api/transactions";

export const WalletInfo = async () => {
  const wallet = await getWallet();
  const transactions = await getTransactions();

  return (
    <div className="flex flex-col md:flex-row mt-44 gap-32 items-center">
      <ChartComponent balance={wallet.balance} transactions={transactions} />
      <TransactionsSummary wallet={wallet} />
    </div>
  );
};
