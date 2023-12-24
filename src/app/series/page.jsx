import React from "react";
import getSeries from "@/app/data/series";
import Series from "@/components/Series";
import Logo from "@/components/Logo";
import ButtonHome from "@/components/ButtonHome";

export default async function Serie() {
  const allseries = await getSeries();
  return (
    <div className="flex flex-col w-[100dvw] h-[100dvh]">
      <section className="flex gap-3">
        <Logo />
        <h2
          className="flex items-center text-3xl font-semibold
         bg-gradient-to-b from-blue-500 to-white bg-clip-text text-transparent"
        >
          SERIES ESTRENOS
        </h2>
      </section>
      <Series allseries={allseries} />
      <ButtonHome />
    </div>
  );
}
