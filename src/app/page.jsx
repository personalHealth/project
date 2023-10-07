import React from "react";
import NavBar from "@/components/NavBar";
import Channels from "@/components/Channels";
import Footer from "@/components/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Sign from "@/app/sign/page";

export default function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  const auth = isAuthenticated();

  if (!auth) {
    return <Sign />;
  } else
    return (
      <main className="bg-slate-600 bg-cover">
        <NavBar />
        <Channels />
        <Footer />
      </main>
    );
}
