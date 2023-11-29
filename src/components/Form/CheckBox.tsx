import { FC } from "react";

import { CheckBoxType } from "@/types/form.type";

export const CheckBox: FC<CheckBoxType> = ({
  availableOptions,
  selectecOptions,
  handleSetOptions,
}) => {
  return (
    <div className="w-[86%] bg-white shadow-md rounded-lg p-4 m-auto absolute xs:left-[50%] xs:-ml-[43%]">
      {availableOptions.map((opt, i) => (
        <div key={i} className="flex items-center mb-4 gap-2">
          <input
            type="checkbox"
            value={opt}
            checked={selectecOptions.includes(opt)}
            onChange={(e) => handleSetOptions(e)}
            className="w-4 h-4 text-primary-100 font-bold accent-primary-100 bg-gray-100
                  border-gray-300 rounded focus:ring-primary-100 focus:ring-2"
          />
          <label className="ms-2 text-sm font-medium text-primary-100">
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
};
