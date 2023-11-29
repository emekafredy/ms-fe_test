"use client";

import { FC, useState } from "react";
import Image from "next/image";

// components
import { UserMenuDropDown } from "./UserMenuDropdown";
import { Button } from "@/components/Button";

// others
import { menuItems } from "@/data";
import { UserType } from "@/types/user.type";
import { getNameInitials } from "@/utils";
import HamburgerIcon from "../../../assets/icons/nav/icon-hamburger.svg";

export const UserMenu: FC<{ user: UserType }> = ({ user }) => {
  const { commsMenu } = menuItems;
  const initials = getNameInitials(user);
  const [showUserMenuDropdown, setShowUserMenuDropdown] =
    useState<boolean>(false);

  return (
    <div className="flex gap-2">
      {commsMenu.map((cm) => {
        return (
          <div key={cm.id} className="hidden sm:inline">
            <Button
              content={<Image src={cm.icon} alt={cm.title} />}
              btnClass="secondary"
              size="small"
              handleClick={() => null}
            />
          </div>
        );
      })}

      <Button
        content={
          <div className="w-[1.8rem] h-[1.8rem] bg-primary-100 bg-opacity-80 text-white rounded-full flex items-center justify-center">
            <p className="text-sm"> {initials} </p>
          </div>
        }
        rightIcon={HamburgerIcon}
        btnClass="tertiary"
        size="small"
        handleClick={() => setShowUserMenuDropdown(!showUserMenuDropdown)}
      />

      {showUserMenuDropdown && <UserMenuDropDown user={user} />}
    </div>
  );
};
