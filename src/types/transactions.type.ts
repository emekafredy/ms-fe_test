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
