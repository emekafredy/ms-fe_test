"use client";

import { FC, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";

// components
import { DatePicker } from "@/components/DatePicker";

// others
import { DateFilterType } from "@/types/transactions.type";
import ArrowDownIcon from "../../../assets/icons/shared/icon-arrow-down.svg";
import ArrowUpIcon from "../../../assets/icons/shared/icon-arrow-up.svg";

export const DateFilter: FC<DateFilterType> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [startDatePickerOpen, setStartDatePickerOpen] =
    useState<boolean>(false);
  const [endDatePickerOpen, setEndDatePickerOpen] = useState<boolean>(false);

  const toggleStartDatePicker = () => {
    setEndDatePickerOpen(false);
    setStartDatePickerOpen(!startDatePickerOpen);
  };

  const toggleEndDatePicker = () => {
    setStartDatePickerOpen(false);
    setEndDatePickerOpen(!endDatePickerOpen);
  };

  return (
    <>
      <div className="mt-8">
        <p className="font-bold text-md text-left mb-2">Date Range</p>
        <div className="flex items-center justify-between gap-4">
          <div
            className="w-[50%] px-4 py-3 border rounded-lg flex items-center justify-between"
            onClick={toggleStartDatePicker}
          >
            <p>{dayjs(startDate).format("DD MMM YYYY")}</p>
            <Image
              src={startDatePickerOpen ? ArrowUpIcon : ArrowDownIcon}
              alt="date-picker-icon"
            />
          </div>

          <div
            className="w-[50%] px-4 py-3 border rounded-lg flex items-center justify-between"
            onClick={toggleEndDatePicker}
          >
            <p>{dayjs(endDate).format("DD MMM YYYY")}</p>
            <Image
              src={endDatePickerOpen ? ArrowUpIcon : ArrowDownIcon}
              alt="date-picker-icon"
            />
          </div>
        </div>
      </div>
      {(startDatePickerOpen || endDatePickerOpen) && (
        <div className="w-[86%] m-auto absolute xs:left-[50%] xs:-ml-[43%]">
          <DatePicker
            dateSelected={startDatePickerOpen ? startDate : endDate}
            onChange={startDatePickerOpen ? setStartDate : setEndDate}
          />
        </div>
      )}
    </>
  );
};
