import Link from "next/link";
import { RouteItem } from "./Sidebar";
import { cn } from "@/lib/cn";

function SidebarItem({ icon: Icon, label, active, href }: RouteItem) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row text-neutral-500 hover:text-white items-center w-full h-auto text-md font-medium py-1 gap-x-4 cursor-pointer transition",
        {
          "text-white": active,
        }
      )}
    >
      <Icon size={26} />
      <p className=" w-full truncate">{label}</p>
    </Link>
  );
}

export default SidebarItem;
