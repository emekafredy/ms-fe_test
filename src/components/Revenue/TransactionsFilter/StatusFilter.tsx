"use client";

import { FC, useState } from "react";
import Image from "next/image";

// components
import { CheckBox } from "@/components/Form/CheckBox";

// others
import { StatusFilterType } from "@/types/transactions.type";
import ArrowDownIcon from "../../../assets/icons/shared/icon-arrow-down.svg";
import ArrowUpIcon from "../../../assets/icons/shared/icon-arrow-up.svg";
import { transactionStatusOptions } from "@/data";

export const StatusFilter: FC<StatusFilterType> = ({
  transactionStatus,
  setTransactionStatus,
}) => {
  const [transactionStatusOpen, setTransactionStatusOpen] =
    useState<boolean>(false);

  const toggleStatusPicker = () => {
    setTransactionStatusOpen(!transactionStatusOpen);
  };

  const handleSetStatus = (e: any) => {
    let updatedList = [...transactionStatus];

    if (e.target.checked) {
      updatedList = [...transactionStatus, e.target.value];
    } else {
      updatedList.splice(transactionStatus.indexOf(e.target.value), 1);
    }

    setTransactionStatus(updatedList);
  };

  return (
    <>
      <div className="mt-8">
        <p className="font-bold text-md text-left mb-2">Transaction Type</p>
        <div
          className="px-4 py-3 border rounded-lg flex items-center justify-between"
          onClick={toggleStatusPicker}
        >
          <div className="flex overflow-x-scroll text-sm">
            {transactionStatus.join(",")}
          </div>
          <Image
            src={transactionStatusOpen ? ArrowUpIcon : ArrowDownIcon}
            alt="date-picker-icon"
          />
        </div>
      </div>

      {transactionStatusOpen && (
        <CheckBox
          availableOptions={transactionStatusOptions}
          selectecOptions={transactionStatus}
          handleSetOptions={handleSetStatus}
        />
      )}
    </>
  );
};
