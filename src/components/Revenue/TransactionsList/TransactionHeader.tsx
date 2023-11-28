"use client";
// components
import { Button } from "@/components/Button";

// others
import ArrowDownIcon from "../../../assets/icons/shared/icon-arrow-down.svg";
import DownloadIcon from "../../../assets/icons/shared/icon-download.svg";

export const TransactionHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm-gap-0 mb-4">
      <div>
        <p className="font-extrabold text-black text-lg">24 Transactions</p>
        <p className="text-xs text-secondary-100">
          Your transactions for All Time
        </p>
      </div>

      <div className="text-right flex gap-2">
        <Button
          content="Filter"
          btnClass="tertiary"
          size="large"
          rightIcon={ArrowDownIcon}
          imgAlt="Apps Logo"
          handleClick={() => null}
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
