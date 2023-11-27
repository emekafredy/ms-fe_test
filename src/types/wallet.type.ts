export type WalletType = {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
};

export type FormattedWalletType = {
  balance: string;
  total_payout: string;
  total_revenue: string;
  pending_payout: string;
  ledger_balance: string;
};
