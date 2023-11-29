import { formatAndSeparateNumber, getNameInitials } from "..";
import { userResponse } from "@/mocks/data";

describe("Utils file", () => {
  describe("getNameInitials", () => {
    it("gets the first letters of user names", () => {
      expect(getNameInitials(userResponse)).toEqual("JD");
    });
  });

  describe("formatAndSeparateNumber", () => {
    it("formats numbers and properly seprates them based on value", () => {
      expect(formatAndSeparateNumber(1000)).toEqual("1,000.00");
      expect(formatAndSeparateNumber(10500.58)).toEqual("10,500.58");
    });
  });
});
