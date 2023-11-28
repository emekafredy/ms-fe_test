import { FC } from "react";
import Image from "next/image";
import { TransactionDetailsType } from "@/types/transactions.type";
import IncomingIcon from "../../../assets/icons/shared/icon-incoming.svg";
import OutgoingIcon from "../../../assets/icons/shared/icon-outgoing.svg";

export const TransactionDetails: FC<{
  transaction: TransactionDetailsType;
}> = ({ transaction }) => {
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-6">
        <div className="flex items-center justify-start gap-3">
          <Image
            src={transaction.type === "deposit" ? IncomingIcon : OutgoingIcon}
            alt="incoming"
          />
          <div>
            <p className="text-primary-100 text-md font-regular">
              {transaction.type === "withdrawal"
                ? "Cash Withdrawal"
                : transaction.metadata?.product_name
                ? transaction.metadata?.product_name
                : "Deposit"}
            </p>
            <p
              className={`text-xs ${
                transaction.type === "deposit"
                  ? "text-secondary-100"
                  : transaction.status === "successful"
                  ? "text-green-700"
                  : "text-yellow-600"
              } text-secondary-100`}
            >
              {transaction.type === "deposit"
                ? transaction.metadata?.name
                : transaction.status}
            </p>
          </div>
        </div>
        <div className="ml-[3.8rem] xs:ml-0 mt-2 xs:mt-0 xs:text-right">
          <p className="text-primary-100 text-md font-extrabold ">
            USD {transaction.amount}
          </p>
          <p className="text-xs text-secondary-100">{transaction.date}</p>
        </div>
      </div>

      <hr className="xs:hidden my-2" />
    </>
  );
};
