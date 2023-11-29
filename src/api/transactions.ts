import { TransactionDetailsType } from "@/types/transactions.type";

export const getTransactions = async (): Promise<TransactionDetailsType[]> => {
  try {
    const data = await fetch("https://fe-task-api.mainstack.io/transactions");
    const transactions = await data.json();

    return transactions;
  } catch (err) {
    if (err instanceof Error) console.log("ERROR:", err.message);
    return [];
  }
};
