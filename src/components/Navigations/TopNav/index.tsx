"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/Button";
import { UserMenu } from "./UserMenu";

import { menuItems } from "@/data";
import MSLogo from "../../../assets/icons/nav/icon-ms-logo.svg";

export const TopNav = () => {
  const router = useRouter();
  const { appMenu, apps, commsMenu } = menuItems;

  return (
    <div className="fixed top-6 z-[100] w-full">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-full w-[98%] m-auto">
        <Image src={MSLogo} alt="Mainstack logo" width={30} />

        <div className="flex gap-2">
          {appMenu.map((item) => {
            return (
              <Button
                key={item.id}
                content={item.title}
                btnClass="secondary"
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
            size="small"
            leftIcon={apps.icon}
            imgAlt="Apps Logo"
            handleClick={() => console.log("click")}
          />
        </div>

        <div className="flex gap-2">
          {commsMenu.map((cm) => {
            return (
              <Button
                key={cm.id}
                content={<Image src={cm.icon} alt={cm.title} />}
                btnClass="secondary"
                size="small"
                handleClick={() => null}
              />
            );
          })}
          <UserMenu />
        </div>
      </nav>
    </div>
  );
};
