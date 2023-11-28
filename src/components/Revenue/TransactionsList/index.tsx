import { FC } from "react";

// components
import { TransactionHeader } from "./TransactionHeader";
import { TransactionDetails } from "./TransactionDetails";

// others
import { TransactionsType } from "@/types/transactions.type";

export const TransactionsList: FC<TransactionsType> = ({ transactions }) => {
  return (
    <div className="mt-28">
      <TransactionHeader />
      <hr />

      <div className="mt-8 mb-40">
        {transactions.map((transaction, i) => {
          return <TransactionDetails key={i} transaction={transaction} />;
        })}
      </div>
    </div>
  );
};
