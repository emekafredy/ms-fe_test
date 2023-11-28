import { Dayjs } from "dayjs";

export type TransactionDetailsType = {
  amount: number;
  status: string;
  type: string;
  date: string;
  metadata?: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference?: string;
};

export type TransactionsType = {
  transactions: TransactionDetailsType[];
};

export type TransactionHeaderType = {
  filteredTransactions: TransactionDetailsType[];
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  filtersCount: number;
  selectedPeriod: string;
};

export type TransactionFilterType = {
  showFilterModal: boolean;
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredTransactions: React.Dispatch<
    React.SetStateAction<TransactionDetailsType[]>
  >;
  transactions: TransactionDetailsType[];
  setFiltersCount: React.Dispatch<React.SetStateAction<number>>;
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>;
  selectedPeriod: string;
};

export type DateFilterType = {
  startDate: Dayjs;
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  endDate: Dayjs;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs>>;
};

export type TypeFilterType = {
  transactionTypes: string[];
  setTransactionTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

export type StatusFilterType = {
  transactionStatus: string[];
  setTransactionStatus: React.Dispatch<React.SetStateAction<string[]>>;
};
