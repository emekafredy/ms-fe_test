import fetch from "jest-fetch-mock";
import { getTransactions } from "../transactions";
import { transactionsResponse } from "@/mocks/data";

it("returns a list of transactions", async () => {
  fetch.mockResponseOnce(JSON.stringify(transactionsResponse));
  const transactions = await getTransactions();

  expect(transactions.length).toEqual(3);
  expect(fetch).toHaveBeenCalledTimes(1);
});
