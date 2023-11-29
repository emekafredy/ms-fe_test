import { TransactionDetailsType } from "@/types/transactions.type";

export const getTransactions = async (): Promise<TransactionDetailsType[]> => {
  try {
    const res = await fetch("https://fe-task-api.mainstack.io/transactions");

    if (!res.ok)
      throw new Error("Failed to fetch transactions. Please try again");

    const transactions = await res.json();

    return transactions;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    return [];
  }
};
