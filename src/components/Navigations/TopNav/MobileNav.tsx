"use client";

import { FC, useState } from "react";
import Image from "next/image";

// components
import { Button } from "@/components/Button";
import { AppMenu } from "./AppMenu";

// others
import { UserType } from "@/types/user.type";
import { getNameInitials } from "@/utils";
import HamburgerIcon from "../../../assets/icons/nav/icon-hamburger.svg";

export const MobileNav: FC<{ user: UserType }> = ({ user }) => {
  const initials = getNameInitials(user);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      <Button
        content={<Image src={HamburgerIcon} alt="open-mobile-menu" />}
        btnClass="tertiary"
        size="medium"
        handleClick={() => setShowMobileMenu(!showMobileMenu)}
      />

      {showMobileMenu && (
        <div className="fixed inset-0 z-[200] outline-none focus:outline-none rounded top-24">
          <div className="relative w-[98%] m-auto">
            <div className="bg-white mt-4 sm:mr-6 rounded-2xl p-8 w-[100%] m-auto sm:w-[450px] float-right shadow-lg">
              <div className="flex items-end justify-end gap-4">
                <div>
                  <p className="text-md font-bold text-primary-100">{`${user.first_name} ${user.last_name}`}</p>
                  <p className="text-sm text-primary-100">{user.email}</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 bg-opacity-80 text-white rounded-full flex items-center justify-center">
                  <p className="text-sm"> {initials} </p>
                </div>
              </div>

              <AppMenu styles="flex flex-col gap-4 items-end my-8" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
