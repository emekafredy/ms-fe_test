import { Dayjs } from "dayjs";

export type CalendarValueType = {
  text: string;
  value: Dayjs;
};

export type WeekDayPickerType = {
  dateShown: Dayjs;
  dateSelected: Dayjs;
  onChange: (newDate: Dayjs) => void;
};

export type MonthYearPickerType = {
  dateShown: Dayjs;
  setDateShown: React.Dispatch<React.SetStateAction<Dayjs>>;
};

export type DatePickerType = {
  dateSelected: Dayjs;
  selectorDateFormat?: string;
  onChange: (newDate: Dayjs) => void;
};
