import { TransactionDetailsType } from "@/types/transactions.type";

export const getTransactions = async (): Promise<TransactionDetailsType[]> => {
  const data = await fetch("https://fe-task-api.mainstack.io/transactions");
  const transactions = await data.json();

  return transactions;
};
