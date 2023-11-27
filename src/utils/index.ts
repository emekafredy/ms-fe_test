import { UserType } from "@/types/user.type";

export const setActiveLink = (title: string, pathname: string): boolean => {
  let active = false;
  if (pathname === `/${title.toLowerCase()}`) {
    active = true;
  }
  if (title === "Home" && pathname === "/") {
    active = true;
  }

  return active;
};

export const getNameInitials = (user: UserType): string => {
  const name = `${user.first_name} ${user.last_name}`;
  const matches = name.match(/\b(\w)/g) as RegExpMatchArray;

  return matches.join("");
};
