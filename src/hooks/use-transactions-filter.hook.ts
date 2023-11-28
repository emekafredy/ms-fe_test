import { useState } from "react";
import { TransactionDetailsType } from "@/types/transactions.type";
import {
  filterTransactionsData,
  getFiltersUsedCount,
  setDateFilterOption,
} from "@/utils";

export const useTransactionsFilter = (
  setFilteredTransactions: React.Dispatch<
    React.SetStateAction<TransactionDetailsType[]>
  >,
  transactions: TransactionDetailsType[],
  setFiltersCount: React.Dispatch<React.SetStateAction<number>>,
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>
) => {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [transactionTypes, setTransactionTypes] = useState<string[]>([]);
  const [transactionStatus, setTransactionStatus] = useState<string[]>([]);

  const hasNoFilter =
    transactionTypes.length === 0 &&
    transactionStatus.length === 0 &&
    (startDate === undefined || endDate || undefined);

  const handleDateFilterOptionChange = (period: string) => {
    setSelectedPeriod(period);
    const { startDate, endDate } = setDateFilterOption(period);

    setStartDate(startDate);
    setEndDate(endDate);
  };

  const filterTransactions = () => {
    const result = filterTransactionsData(
      transactions,
      transactionTypes,
      transactionStatus,
      startDate,
      endDate
    );

    const filtersUsedCount = getFiltersUsedCount(
      transactionTypes,
      transactionStatus,
      startDate,
      endDate
    );

    setFilteredTransactions(result);
    setFiltersCount(filtersUsedCount);
  };

  const handleFilterTransactions = () => {
    filterTransactions();
  };

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    transactionTypes,
    setTransactionTypes,
    transactionStatus,
    setTransactionStatus,
    hasNoFilter,
    filterTransactions,
    setSelectedPeriod,
    handleFilterTransactions,
    handleDateFilterOptionChange,
  };
};
