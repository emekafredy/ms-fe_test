import { Dayjs } from "dayjs";
import { CalendarValueType } from "@/types/date.type";

export const changeMonth = (date: Dayjs, next: boolean) => {
  if (date.month() === 0 && !next) {
    return date.set("year", date.year() - 1).set("month", 11);
  }

  if (date.month() === 11 && next) {
    return date.set("year", date.year() + 1).set("month", 0);
  }

  return date.add(next ? 1 : -1, "month");
};

const getCalendarValues = (date: Dayjs): CalendarValueType[] => {
  const daysArray = new Array(date.daysInMonth()).fill(1);
  const calendarValues: CalendarValueType[] = [];

  const prepareCell = (date: Dayjs, dayNumber: number) => {
    return {
      text: String(dayNumber),
      value: date.clone().set("date", dayNumber),
    };
  };
  daysArray.forEach((_, i) => {
    calendarValues.push(prepareCell(date, i + 1));
  });

  const valuesToAdd = 35 - daysArray.length;

  const lastMonth = date.subtract(1, "month");
  for (let i = 0; i < Math.floor(valuesToAdd / 2); i++) {
    calendarValues.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
  }

  const nextMonth = date.add(1, "month");
  for (let i = 0; i < Math.round(valuesToAdd / 2); i++) {
    calendarValues.push(prepareCell(nextMonth, i + 1));
  }

  return calendarValues;
};

export const getCalendarRows = (date: Dayjs): Array<CalendarValueType[]> => {
  const cells = getCalendarValues(date);
  const rows: Array<CalendarValueType[]> = [];

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
};
