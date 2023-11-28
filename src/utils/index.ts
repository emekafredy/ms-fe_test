import dayjs, { Dayjs } from "dayjs";
import { UserType } from "@/types/user.type";
import { WalletType, FormattedWalletType } from "@/types/wallet.type";
import { TransactionDetailsType } from "@/types/transactions.type";

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

export const getFullDate = (date: Date): Dayjs => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return dayjs(`${month}-${day}-${year}`);
};

export const setDateFilterOption = (period: string) => {
  let startDate: Dayjs;
  let endDate: Dayjs;
  let from: Date;
  let to: Date;

  const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth();

  switch (period) {
    case "Today":
      startDate = getFullDate(date);
      endDate = getFullDate(date);
      break;
    case "Last 7 days":
      const first = date.getDate() - 6;
      const last = first + 6;

      startDate = getFullDate(new Date(date.setDate(first)));
      endDate = getFullDate(new Date(date.setDate(last)));
      break;
    case "This month":
      from = new Date(year, month, 1);
      to = new Date(year, month + 1, 0);

      startDate = getFullDate(from);
      endDate = getFullDate(to);
      break;
    case "Last 3 months":
      from = new Date(date.setMonth(date.getMonth() - 3));

      startDate = getFullDate(from);
      endDate = getFullDate(new Date());
      break;
    case "This year":
      from = new Date(date.getFullYear(), 0, 1);
      to = new Date(date.getFullYear(), 11, 31);

      startDate = getFullDate(from);
      endDate = getFullDate(to);
      break;
    case "Last year":
      from = new Date(date.getFullYear() - 1, 0, 1);
      to = new Date(date.getFullYear() - 1, 11, 31);

      startDate = getFullDate(from);
      endDate = getFullDate(to);
      break;
    default:
      startDate = dayjs();
      endDate = dayjs();
      break;
  }

  return {
    startDate,
    endDate,
  };
};

export const optionsSubstring = (str: string): string => {
  if (str.length > 45) {
    return `${str.substring(0, 44)}...`;
  }

  return str;
};

export const getFiltersUsedCount = (
  types: string[],
  status: string[],
  startDate: any,
  endDate: any
): number => {
  let count = 0;
  if (types.length > 0) count += 1;
  if (status.length > 0) count += 1;
  if (startDate || endDate) count += 1;

  return count;
};

export const filterTransactionsData = (
  transactions: TransactionDetailsType[],
  types: string[],
  status: string[],
  startDate: any,
  endDate: any
): TransactionDetailsType[] => {
  let currentTransactions = transactions;

  currentTransactions = currentTransactions.filter((t) => {
    let match = true;
    const date = dayjs(t.date);

    if (startDate) {
      match = match && dayjs(startDate) < date;
    }

    if (endDate) {
      match = match && dayjs(endDate) > date;
    }

    if (types.length > 0) {
      match = match && types.includes(t.type);
    }

    if (status.length > 0) {
      match = match && status.includes(t.status);
    }

    return match;
  });

  return currentTransactions;
};
