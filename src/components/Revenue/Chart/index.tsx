"use client";

import { FC } from "react";
import Link from "next/link";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import dayjs from "dayjs";
import { formatAndSeparateNumber } from "@/utils";
import { TransactionDetailsType } from "@/types/transactions.type";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const options = {
  plugins: {},
  scales: {
    x: {
      ticks: {
        display: true,
        autoSkip: true,
        maxTicksLimit: 3,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const getChartData = (transactions: TransactionDetailsType[]) => {
  return {
    labels: transactions?.map((o) => dayjs(o.date).format("MMM D, YYYY")),
    datasets: [
      {
        label: "",
        data: transactions?.map((o) => o.amount),
        fill: false,
        borderColor: "#FF5302",
        tension: 0.4,
        backgroundColor: "#FFFFFF",
        borderWidth: 1.7,
        pointRadius: 0,
      },
    ],
  };
};

export const ChartComponent: FC<{
  balance: number;
  transactions: TransactionDetailsType[];
}> = ({ balance, transactions }) => {
  const formattedBalance = formatAndSeparateNumber(balance);

  const ordered = transactions.sort(function compare(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateA.valueOf() - dateB.valueOf();
  });

  const data = getChartData(ordered);

  return (
    <div className="w-[100%] md:w-[70%]">
      <div className="flex items-end justify-start gap-12">
        <div>
          <p className="text-[13px] text-secondary-100 leading-10">
            {" "}
            Available Balance{" "}
          </p>
          <p className="font-extrabold text-xl md:text-2xl lg:text-3xl">
            USD {formattedBalance}
          </p>
        </div>

        <Link
          href="/revenue"
          className="text-sm md:text-md lg:text-lg bg-primary-100 text-white px-4 md:px-5
            lg:px-8 py-2 lg:py-3 rounded-full hover:bg-opacity-90"
        >
          Withdraw
        </Link>
      </div>

      <div className="flex items-center justify-center mt-8">
        <Line data={data} width={500} options={options} />
      </div>
    </div>
  );
};
