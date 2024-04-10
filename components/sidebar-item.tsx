"use client";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  href: string;
}

const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  href,
  iconSrc,
  label,
}) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      asChild
      className="justify-start h-[52px]"
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
