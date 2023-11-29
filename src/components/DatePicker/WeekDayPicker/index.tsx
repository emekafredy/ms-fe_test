import React, { useMemo } from "react";
import { Dayjs } from "dayjs";

import { getCalendarRows } from "@/utils/date-picker.util";
import { WeekDayPickerType } from "@/types/date.type";

export const WeekDayPicker: React.FC<WeekDayPickerType> = ({
  dateShown,
  dateSelected,
  onChange,
  setStartDatePickerOpen,
  setEndDatePickerOpen,
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => {
      onChange(value);
      setStartDatePickerOpen(false);
      setEndDatePickerOpen(false);
    };
  };

  const rows = useMemo(() => getCalendarRows(dateShown), [dateShown]);

  return (
    <>
      <div className="flex items-center justify-between h-12 px-4">
        {rows[0].map(({ value }, i) => (
          <div key={i} className="text-sm font-semibold">
            {value.format("ddd")}
          </div>
        ))}
      </div>

      <div className="px-2">
        {rows.map((cells, rowI) => (
          <div key={rowI} className="flex items-center justify-between h-12">
            {cells.map(({ text, value }, i) => (
              <div
                key={`${text} - ${i}`}
                className={`py-2 h-[38px] w-[38px] my-2 rounded-full flex items-center justify-center ${
                  dateSelected && dateSelected.toString() === value.toString()
                    ? "bg-primary-100 text-white"
                    : "text-primary-100"
                }`}
                onClick={handleSelectDate(value)}
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
