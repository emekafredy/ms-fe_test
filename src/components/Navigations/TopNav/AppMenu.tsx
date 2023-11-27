"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// components
import { Button } from "@/components/Button";
import { AppMenuDropDown } from "./AppMenuDropdown";

// others
import { menuItems } from "@/data";
import { setActiveLink } from "@/utils";

export const AppMenu = () => {
  const { appMenu, apps } = menuItems;
  const [showAppMenuDropdown, setShowAppMenuDropdown] =
    useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      {appMenu.map((item) => {
        return (
          <Button
            key={item.id}
            content={item.title}
            btnClass="secondary"
            active={setActiveLink(item.title, pathname)}
            size="medium"
            leftIcon={item.icon}
            imgAlt={item.title}
            handleClick={() =>
              router.push(
                item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`
              )
            }
          />
        );
      })}

      <Button
        content={apps.title}
        btnClass="secondary"
        size="medium"
        leftIcon={apps.icon}
        active={showAppMenuDropdown}
        imgAlt="Apps Logo"
        handleClick={() => setShowAppMenuDropdown(!showAppMenuDropdown)}
      />

      {showAppMenuDropdown && <AppMenuDropDown />}
    </div>
  );
};
