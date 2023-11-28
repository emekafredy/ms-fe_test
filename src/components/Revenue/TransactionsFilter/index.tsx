"use client";

import { FC } from "react";
import Image from "next/image";

// components
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import { DateFilter } from "./DateFilter";
import { TypeFilter } from "./TypeFilter";
import { StatusFilter } from "./StatusFilter";

// others
import { TransactionFilterType } from "@/types/transactions.type";
import CloseIcon from "../../../assets/icons/shared/icon-close.svg";
import { filterData } from "@/data";
import { useTransactionsFilter } from "@/hooks/use-transactions-filter.hook";

export const TransactionsFilter: FC<TransactionFilterType> = ({
  showFilterModal,
  setShowFilterModal,
  setFilteredTransactions,
  transactions,
  setFiltersCount,
  setSelectedPeriod,
  selectedPeriod,
}) => {
  const { options } = filterData;
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    transactionTypes,
    setTransactionTypes,
    transactionStatus,
    setTransactionStatus,
    handleFilterTransactions,
    hasNoFilter,
    handleDateFilterOptionChange,
  } = useTransactionsFilter(
    setFilteredTransactions,
    transactions,
    setFiltersCount,
    setSelectedPeriod
  );

  return (
    <Modal showModal={showFilterModal} setShowModal={setShowFilterModal}>
      <>
        <div className="flex items-center justify-between">
          <p className="text-lg font-extrabold"> Filter </p>
          <Button
            content={<Image src={CloseIcon} alt="close-filter-modal" />}
            btnClass="secondary"
            size="small"
            handleClick={() => setShowFilterModal(false)}
          />
        </div>

        <div className="flex gap-2 overflow-scroll py-6">
          {options.map((option) => {
            return (
              <div key={option.id} className="w-[100%]">
                <Button
                  key={option.id}
                  content={option.period}
                  bordered
                  btnClass={
                    selectedPeriod === option.period
                      ? "selected"
                      : "transparent"
                  }
                  size="medium"
                  handleClick={() =>
                    handleDateFilterOptionChange(option.period)
                  }
                />
              </div>
            );
          })}
        </div>

        <DateFilter
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <TypeFilter
          transactionTypes={transactionTypes}
          setTransactionTypes={setTransactionTypes}
        />

        <StatusFilter
          transactionStatus={transactionStatus}
          setTransactionStatus={setTransactionStatus}
        />

        <div className="w-[86%] m-auto absolute bottom-6 xs:left-[50%] xs:-ml-[43%]">
          <div className="flex items-center justify-between gap-2">
            <Button
              content="Clear"
              btnClass="secondary"
              bordered
              size="wide"
              handleClick={() => null}
            />

            <Button
              content="Apply"
              btnClass="primary"
              size="wide"
              handleClick={() => handleFilterTransactions()}
              disabled={hasNoFilter}
            />
          </div>
        </div>
      </>
    </Modal>
  );
};
