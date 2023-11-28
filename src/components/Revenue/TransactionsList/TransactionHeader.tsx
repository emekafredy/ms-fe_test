"use client";

import { FC } from "react";

// components
import { Button } from "@/components/Button";

// others
import ArrowDownIcon from "../../../assets/icons/shared/icon-arrow-down.svg";
import DownloadIcon from "../../../assets/icons/shared/icon-download.svg";
import { TransactionHeaderType } from "@/types/transactions.type";

export const TransactionHeader: FC<TransactionHeaderType> = ({
  filteredTransactions,
  setShowFilterModal,
  filtersCount,
  selectedPeriod,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm-gap-0 mb-4">
      <div>
        <p className="font-extrabold text-black text-lg">
          {filteredTransactions.length} Transactions
        </p>
        <p className="text-xs text-secondary-100">
          Your transactions for {selectedPeriod}
        </p>
      </div>

      <div className="text-right flex gap-2">
        <Button
          content={
            <p className="flex items-center justify-center gap-1">
              <span>Filter</span>
              {filtersCount > 0 && (
                <span
                  className="flex items-center justify-center text-xs
                  text-white h-5 w-5 bg-primary-100 rounded-full"
                >
                  {filtersCount}
                </span>
              )}
            </p>
          }
          btnClass="tertiary"
          size="large"
          rightIcon={ArrowDownIcon}
          imgAlt="Apps Logo"
          handleClick={() => setShowFilterModal(true)}
        />

        <Button
          content="Export list"
          btnClass="tertiary"
          size="large"
          rightIcon={DownloadIcon}
          imgAlt="Apps Logo"
          handleClick={() => null}
        />
      </div>
    </div>
  );
};
