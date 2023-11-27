import Image from "next/image";
import { UserType } from "@/types/user.type";
import { FC } from "react";
import { getNameInitials } from "@/utils";
import { menuItems } from "@/data";

export const UserMenuDropDown: FC<{ user: UserType }> = ({ user }) => {
  const initials = getNameInitials(user);
  const { userDropdown } = menuItems;

  return (
    <div className="fixed inset-0 z-[200] outline-none focus:outline-none rounded top-24">
      <div className="relative w-[98%] m-auto">
        <div className="bg-white mt-4 mr-6 rounded-2xl p-8 w-[380px] float-right shadow-lg">
          <div className="flex items-center justify-start gap-4">
            <div className="w-12 h-12 bg-primary-100 bg-opacity-80 text-white rounded-full flex items-center justify-center">
              <p className="text-sm"> {initials} </p>
            </div>
            <div>
              <p className="text-md font-bold text-primary-100">{`${user.first_name} ${user.last_name}`}</p>
              <p className="text-sm text-primary-100">{user.email}</p>
            </div>
          </div>

          <div className="mt-12">
            {userDropdown.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-start gap-4 mt-6"
                >
                  <Image src={item.icon} alt={item.title} />
                  <p className="text-sm text-primary-100 font-semibold">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
