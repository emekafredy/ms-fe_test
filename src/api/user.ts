import { UserType } from "@/types/user.type";

export const getUser = async (): Promise<UserType> => {
  const res = await fetch("https://fe-task-api.mainstack.io/user");
  if (!res.ok)
    throw new Error("Failed to fetch user profile. Please try again");
  const user = await res.json();

  return user;
};
