import { UserType } from "@/types/user.type";

export const getUser = async (): Promise<UserType> => {
  const data = await fetch("https://fe-task-api.mainstack.io/user");
  const user = await data.json();

  return user;
};
