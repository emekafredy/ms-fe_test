import { FC } from "react";
import Link from "next/link";
import { LinkType } from "@/interfaces/link.interface";

export const AppLink: FC<LinkType> = ({ to, title, linkClass, leftIcon }) => {
  return (
    <Link href={to} className={`link link-${linkClass}`}>
      {leftIcon}
      {title}
    </Link>
  );
};
