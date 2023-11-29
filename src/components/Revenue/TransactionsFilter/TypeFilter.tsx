import { FC } from "react";
import Image from "next/image";

// components
import { CheckBox } from "@/components/Form/CheckBox";

// others
import { TypeFilterType } from "@/types/transactions.type";
import ArrowDownIcon from "../../../assets/icons/shared/icon-arrow-down.svg";
import ArrowUpIcon from "../../../assets/icons/shared/icon-arrow-up.svg";
import { transactionTypesOptions } from "@/data";
import { optionsSubstring } from "@/utils";

export const TypeFilter: FC<TypeFilterType> = ({
  transactionTypes,
  setTransactionTypes,
  setStartDatePickerOpen,
  setEndDatePickerOpen,
  setTransactionStatusFilterOpen,
  setTransactionTypesOpen,
  transactionTypesOpen,
}) => {
  const toggleTypesPicker = () => {
    setStartDatePickerOpen(false);
    setEndDatePickerOpen(false);
    setTransactionStatusFilterOpen(false);
    setTransactionTypesOpen(!transactionTypesOpen);
  };

  const handleSetTypes = (e: any) => {
    let updatedList = [...transactionTypes];

    if (e.target.checked) {
      updatedList = [...transactionTypes, e.target.value];
    } else {
      updatedList.splice(transactionTypes.indexOf(e.target.value), 1);
    }

    setTransactionTypes(updatedList);
  };

  return (
    <>
      <div className="mt-8">
        <p className="font-bold text-md text-left mb-2">Transaction Type</p>
        <div
          className="px-4 py-3 border rounded-lg flex items-center justify-between"
          onClick={toggleTypesPicker}
        >
          <div className="flex overflow-x-scroll text-sm">
            {optionsSubstring(transactionTypes.join(","))}
          </div>
          <Image
            src={transactionTypesOpen ? ArrowUpIcon : ArrowDownIcon}
            alt="date-picker-icon"
          />
        </div>
      </div>

      {transactionTypesOpen && (
        <CheckBox
          availableOptions={transactionTypesOptions}
          selectecOptions={transactionTypes}
          handleSetOptions={handleSetTypes}
        />
      )}
    </>
  );
};
