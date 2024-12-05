"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <>
      {children}
      {!isLoginPage && <Navbar />}
      {!isLoginPage && <Footer />}
    </>
  );
};

export default ClientWrapper;