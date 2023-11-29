import Image from "next/image";

// components
import { UserMenu } from "./UserMenu";
import { AppMenu } from "./AppMenu";

// others
import MSLogo from "../../../assets/icons/nav/icon-ms-logo.svg";
import { getUser } from "@/api/user";

export const TopNav = async () => {
  const user = await getUser();

  return (
    <div className="fixed top-0 z-[100] w-full bg-white">
      <nav className="flex items-center justify-between mt-8 px-6 py-4 bg-white shadow-md rounded-full w-[98%] m-auto">
        <Image src={MSLogo} alt="Mainstack logo" width={30} />
        <AppMenu />

        <UserMenu user={user} />
      </nav>
    </div>
  );
};
