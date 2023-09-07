"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { IconType } from "react-icons/lib/esm/iconBase";

export type RouteItem = {
  label: string;
  active: boolean;
  href: string;
  icon: IconType;
};

export function Navigation() {
  const pathName = usePathname();

  const routes = useMemo<RouteItem[]>(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );
  return (
    <Box>
      <nav className="gap-y-4 flex flex-col px-5 py-4">
        {routes.map((route) => {
          return <SidebarItem key={route.label} {...route} />;
        })}
      </nav>
    </Box>
  );
}

export default Navigation;
