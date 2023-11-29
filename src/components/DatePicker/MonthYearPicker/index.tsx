import React from "react";
import Image from "next/image";

// components
import { Button } from "@/components/Button";

// others
import { MonthYearPickerType } from "@/types/date.type";
import { changeMonth } from "@/utils/date-picker.util";
import ArrowLeftIcon from "../../../assets/icons/shared/icon-arrow-left.svg";
import ArrowRightIcon from "../../../assets/icons/shared/icon-arrow-right.svg";

export const MonthYearPicker: React.FC<MonthYearPickerType> = ({
  dateShown,
  setDateShown,
}) => {
  const handleMonthChange = (isNextMonth: boolean) => {
    return () => {
      setDateShown(changeMonth(dateShown, isNextMonth));
    };
  };

  return (
    <div className="flex items-center justify-between h-12">
      <Button
        content={<Image src={ArrowLeftIcon} alt="previous-month" />}
        btnClass="secondary"
        size="small"
        handleClick={handleMonthChange(false)}
      />

      <div className="text-md">{dateShown.format("MMMM, YYYY")}</div>

      <Button
        content={<Image src={ArrowRightIcon} alt="previous-month" />}
        btnClass="secondary"
        size="small"
        handleClick={handleMonthChange(true)}
      />
    </div>
  );
};
