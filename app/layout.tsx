import Sidebar from "@/components/leftSideBar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify - Web player: Music for everyone",
  description: "Listen to your favorite music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
