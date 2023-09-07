"use client";

import { ReactElement, ReactNode } from "react";
import Box from "./Box";
import Library from "./Library";
import Headers from "@/components/headers/Headers";
import { Song } from "@/types/types";
import Navigation from "./Navigation";
import { cn } from "@/lib/cn";
import usePlayer from "@/hooks/usePlayer";

interface SidebarProps {
  children: ReactNode;
  songs: Song[];
}

function Sidebar({ children, songs }: SidebarProps): ReactElement {
  const player = usePlayer();

  return (
    <div
      className={cn("flex h-full", {
        "h-[calc(100%-80px)]": player.activeID,
      })}
    >
      <div className="md:flex gap-y-2 h-full w-[300px] p-2 flex-col hidden bg-black">
        <Navigation />
        <Box className="h-full overflow-y-auto">
          <Library songs={songs}></Library>
        </Box>
      </div>
      <main className=" flex-1 h-full py-2 overflow-y-auto">
        <div className="bg-neutral-900 over rounded-y-auto w-full h-full overflow-hidden !overflow-y-auto rounded-lg">
          <Headers className="from-bg-neutral-900"></Headers>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
