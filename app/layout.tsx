import Sidebar from "@/components/leftSideBar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProviders from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import getSongbyUserID from "@/actions/getSongbyUserID";
import Player from "@/components/player/Player";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aratamete Spotify: Music for everyone",
  description: "Listen to your favorite music",
  icons: { icon: "/image/spotify.png" },
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSong = await getSongbyUserID();

  return (
    <html lang="en">
      <body className={figTree.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProviders />
            <Sidebar songs={userSong}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
