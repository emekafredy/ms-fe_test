import fetch from "jest-fetch-mock";
import { getUser } from "../user";
import { userResponse } from "@/mocks/data";

it("returns teh user profile", async () => {
  fetch.mockResponseOnce(JSON.stringify(userResponse));
  const user = await getUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(user.first_name).toEqual("Johnny");
  expect(user.email).toEqual("jony@do.com");
});
