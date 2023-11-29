"use client";

import { FC, useState } from "react";

// components
import { TransactionHeader } from "./TransactionHeader";
import { TransactionDetails } from "./TransactionDetails";
import { EmptyList } from "./EmptyList";

// others
import {
  TransactionsType,
  TransactionDetailsType,
} from "@/types/transactions.type";
import { useTransactionsFilter } from "@/hooks/use-transactions-filter.hook";
import { TransactionsFilter } from "../TransactionsFilter";

export const TransactionsList: FC<TransactionsType> = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState<TransactionDetailsType[]>(transactions);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [filtersCount, setFiltersCount] = useState<number>(0);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("All time");

  const { clearFilters } = useTransactionsFilter(
    setFilteredTransactions,
    transactions,
    setFiltersCount,
    setSelectedPeriod
  );

  return (
    <div className="mt-28">
      <TransactionHeader
        filteredTransactions={filteredTransactions}
        filtersCount={filtersCount}
        selectedPeriod={selectedPeriod}
        setShowFilterModal={setShowFilterModal}
      />
      <hr />

      <div className="mt-8 mb-40">
        {filteredTransactions.length ? (
          filteredTransactions.map((transaction, i) => {
            return <TransactionDetails key={i} transaction={transaction} />;
          })
        ) : (
          <EmptyList clearFilters={clearFilters} />
        )}
      </div>

      <TransactionsFilter
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
        setFilteredTransactions={setFilteredTransactions}
        transactions={transactions}
        setFiltersCount={setFiltersCount}
        setSelectedPeriod={setSelectedPeriod}
        selectedPeriod={selectedPeriod}
      />
    </div>
  );
};
