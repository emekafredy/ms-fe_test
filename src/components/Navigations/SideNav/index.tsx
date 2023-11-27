import Image from "next/image";
import { sideNavItems } from "@/data";
import { SideNavMenu } from "./SideNavMenu";

export const SideNav = () => {
  return (
    <div className="fixed z-[500] outline-none focus:outline-none top-[35%] left-6 shadow-xl shadow-gray-300 rounded-full">
      <div className="p-2 rounded-full">
        {/* {sideNavItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-start gap-4 mt-2 hover:bg-gray-200 p-2 rounded-full"
            >
              <Image src={item.icon} alt={item.title} />
            </div>
          );
        })} */}
        <SideNavMenu />
      </div>
    </div>
  );
};
