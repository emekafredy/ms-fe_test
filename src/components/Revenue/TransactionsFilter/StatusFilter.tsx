import { FC } from "react";
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
  setEndDatePickerOpen,
  setTransactionTypesOpen,
  setStartDatePickerOpen,
  transactionStatusFilterOpen,
  setTransactionStatusFilterOpen,
}) => {
  const toggleStatusPicker = () => {
    setEndDatePickerOpen(false);
    setTransactionTypesOpen(false);
    setStartDatePickerOpen(false);
    setTransactionStatusFilterOpen(!transactionStatusFilterOpen);
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
        <p className="font-bold text-md text-left mb-2">Transaction Status</p>
        <div
          className="px-4 py-3 border rounded-lg flex items-center justify-between"
          onClick={toggleStatusPicker}
        >
          <div className="flex overflow-x-scroll text-sm">
            {transactionStatus.join(",")}
          </div>
          <Image
            src={transactionStatusFilterOpen ? ArrowUpIcon : ArrowDownIcon}
            alt="date-picker-icon"
          />
        </div>
      </div>

      {transactionStatusFilterOpen && (
        <CheckBox
          availableOptions={transactionStatusOptions}
          selectecOptions={transactionStatus}
          handleSetOptions={handleSetStatus}
        />
      )}
    </>
  );
};
