import { UserType } from "@/types/user.type";
import { WalletType, FormattedWalletType } from "@/types/wallet.type";

export const setActiveLink = (title: string, pathname: string): boolean => {
  let active = false;
  if (pathname === `/${title.toLowerCase()}`) {
    active = true;
  }
  if (title === "Home" && pathname === "/") {
    active = true;
  }

  return active;
};

export const getNameInitials = (user: UserType): string => {
  const name = `${user.first_name} ${user.last_name}`;
  const matches = name.match(/\b(\w)/g) as RegExpMatchArray;

  return matches.join("");
};

export const formatAndSeparateNumber = (num: number): string => {
  const str = num?.toFixed(2) || "";
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatWalletData = (wallet: WalletType): FormattedWalletType => {
  return {
    balance: formatAndSeparateNumber(wallet.balance),
    total_payout: formatAndSeparateNumber(wallet.total_payout),
    total_revenue: formatAndSeparateNumber(wallet.total_revenue),
    pending_payout: formatAndSeparateNumber(wallet.pending_payout),
    ledger_balance: formatAndSeparateNumber(wallet.ledger_balance),
  };
};
