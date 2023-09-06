"use client";

import { usePathname } from "next/navigation";
import { ReactElement, ReactNode, useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { IconType } from "react-icons/lib/esm/iconBase";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types/types";

interface SidebarProps {
  children: ReactNode;
  songs: Song[];
}

export type RouteItem = {
  label: string;
  active: boolean;
  href: string;
  icon: IconType;
};

function Sidebar({ children, songs }: SidebarProps): ReactElement {
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
    <div className="flex h-full">
      <div className="md:flex gap-y-2 h-full w-[300px] p-2 flex-col hidden bg-black">
        <Box>
          <nav className="gap-y-4 flex flex-col px-5 py-4">
            {routes.map((route) => {
              return <SidebarItem key={route.label} {...route} />;
            })}
          </nav>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs}></Library>
        </Box>
      </div>
      <main className=" flex-1 h-full py-2 overflow-y-auto">{children}</main>
    </div>
  );
}

export default Sidebar;
