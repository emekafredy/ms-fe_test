import { UserType } from "@/types/user.type";
import { Button } from "@/components/Button";
import HamburgerIcon from "../../../assets/icons/nav/icon-hamburger.svg";

const getUser = async (): Promise<UserType> => {
  const data = await fetch("https://fe-task-api.mainstack.io/user");
  const user = await data.json();

  return user;
};

export const UserMenu = async () => {
  const user = await getUser();

  return (
    <Button
      content={
        <div className="w-[1.8rem] h-[1.8rem] bg-primary-100 bg-opacity-80 text-white rounded-full flex items-center justify-center">
          <p className="text-sm"> OJ </p>
        </div>
      }
      rightIcon={HamburgerIcon}
      btnClass="tertiary"
      size="small"
      handleClick={() => null}
    />
  );
};
