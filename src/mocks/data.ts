export const transactionsResponse = [
  {
    amount: 500,
    metadata: {
      name: "John Doe",
      type: "digital_product",
      email: "johndoe@mail.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Rich Dad Poor Dad",
    },
    payment_reference: "UU999X90DE----EEJEEEDDDD",
    status: "successful",
    type: "deposit",
    date: "2023-03-03",
  },
  {
    amount: 400,
    metadata: {
      name: "Jane Smith",
      type: "coffee",
      email: "janesmith@mail.com",
      quantity: 8,
      country: "Ireland",
    },
    payment_reference: "0DII9EODD------KODE-0DOD0D0KD",
    status: "successful",
    type: "deposit",
    date: "2022-03-02",
  },
  {
    amount: 300,
    status: "successful",
    type: "withdrawal",
    date: "2022-03-01",
  },
];

export const userResponse = {
  first_name: "Johnny",
  last_name: "Doey",
  email: "jony@do.com",
};

export const walletResponse = {
  balance: 750.56,
  total_payout: 500,
  total_revenue: 1250.56,
  pending_payout: 0,
  ledger_balance: 500,
};
