import fetch from "jest-fetch-mock";
import { getWallet } from "../wallet";
import { walletResponse } from "@/mocks/data";

it("returns teh user profile", async () => {
  fetch.mockResponseOnce(JSON.stringify(walletResponse));
  const wallet = await getWallet();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(wallet.balance).toEqual(750.56);
});
