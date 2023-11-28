import React, { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

// components
import { MonthYearPicker } from "./MonthYearPicker";
import { WeekDayPicker } from "./WeekDayPicker";

// others
import { DatePickerType } from "@/types/date.type";

export const DatePicker: FC<DatePickerType> = ({ dateSelected, onChange }) => {
  const [dateShown, setDateShown] = useState(dateSelected.clone());

  return (
    <div className="my-6 bg-white shadow-md w-[100%] p-6 rounded-xl">
      <MonthYearPicker dateShown={dateShown} setDateShown={setDateShown} />

      <WeekDayPicker
        dateSelected={dateSelected}
        dateShown={dateShown}
        onChange={onChange}
      />
    </div>
  );
};
