import React from "react";
import getChannels from "@/app/data/chanels";
import NavBar from "@/components/NavBar";
import Channels from "@/components/Channels";
import Footer from "@/components/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Sign from "@/app/sign/page";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const allchannels = await getChannels();
  const user = getUser();
  const auth = isAuthenticated();

  // if (!auth) {
  //   return <Sign />;
  // } else
  return (
    <main className="bg-slate-600 bg-cover">
      <NavBar />
      <Channels allchannels={allchannels} />
      <Footer />
    </main>
  );
}
