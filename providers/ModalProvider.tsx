"use client";

import AuthModal from "@/components/authModal/AuthModal";
import Modal from "@/components/modals/Modal";
import UploadModal from "@/components/uploadModal/UploadModal";
import { useEffect, useState } from "react";

function ModalProviders() {
  // Prevent modal open when SSR
  const [isMounted, setisMounted] = useState<boolean>(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}

export default ModalProviders;
