import React, { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

// components
import { MonthYearPicker } from "./MonthYearPicker";
import { WeekDayPicker } from "./WeekDayPicker";

// others
import { DatePickerType } from "@/types/date.type";

export const DatePicker: FC<DatePickerType> = ({
  dateSelected,
  onChange,
  setStartDatePickerOpen,
  setEndDatePickerOpen,
}) => {
  const [dateShown, setDateShown] = useState(
    dateSelected ? dateSelected.clone() : dayjs()
  );

  return (
    <div className="my-6 bg-white shadow-md w-[100%] p-6 rounded-xl">
      <MonthYearPicker dateShown={dateShown} setDateShown={setDateShown} />

      <WeekDayPicker
        dateSelected={dateSelected}
        dateShown={dateShown}
        onChange={onChange}
        setStartDatePickerOpen={setStartDatePickerOpen}
        setEndDatePickerOpen={setEndDatePickerOpen}
      />
    </div>
  );
};
