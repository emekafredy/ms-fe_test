"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// components
import { Button } from "@/components/Button";
import { AppMenuDropDown } from "./AppMenuDropdown";
import { PageMenuSVG, AppMenuSVG } from "./PageMenuSVG";

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
    <div className="hidden md:flex gap-2">
      {appMenu.map((item) => {
        const path =
          item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`;
        return (
          <Button
            key={item.id}
            content={item.title}
            btnClass="secondary"
            active={setActiveLink(item.title, pathname)}
            size="medium"
            leftIcon={
              <PageMenuSVG page={item.title} active={pathname === path} />
            }
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
        leftIcon={<AppMenuSVG active={showAppMenuDropdown} />}
        active={showAppMenuDropdown}
        imgAlt="Apps Logo"
        handleClick={() => setShowAppMenuDropdown(!showAppMenuDropdown)}
      />

      {showAppMenuDropdown && <AppMenuDropDown />}
    </div>
  );
};
