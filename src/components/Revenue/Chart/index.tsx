import { FC } from "react";
import Link from "next/link";
import { formatAndSeparateNumber } from "@/utils";

export const Chart: FC<{ balance: number }> = ({ balance }) => {
  const formattedBalance = formatAndSeparateNumber(balance);

  return (
    <div className="w-[100%] md:w-[70%]">
      <div className="flex items-end justify-start gap-12">
        <div>
          <p className="text-[13px] text-secondary-100 leading-10">
            {" "}
            Available Balance{" "}
          </p>
          <p className="font-extrabold text-xl md:text-2xl lg:text-4xl">
            USD {formattedBalance}
          </p>
        </div>

        <Link
          href="/revenue"
          className="text-sm md:text-md lg:text-lg bg-primary-100 text-white px-4 md:px-6
            lg:px-12 py-2 lg:py-4 rounded-full hover:bg-opacity-90"
        >
          Withdrawal
        </Link>
      </div>

      {/* <div className="flex items-center justify-center h-24">
        <p className="font-bold text-2xl">CHART</p>
      </div> */}
    </div>
  );
};
