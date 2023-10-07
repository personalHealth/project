import React from "react";
import Image from "next/image";
import ButtonHome from "@/components/ButtonHome";
import Control from "@/components/Control";
import Logo from "@/components/Logo";

export default function Programacion() {
  return (
    <div className="flex h-[99.5vh]">
      <div className="fixed z-10 flex items-center bg-[#2196f3] w-52 h-11 left-12 md:w-96 xl:ml-24">
        <Logo />
      </div>
      <ButtonHome />
      <iframe
        className="absolute h-[99vh] w-[99.5vw]"
        title="agenda"
        allowfullscreen="true"
        src="https://www.telered.com.ar/buscador-grilla" //"https://www.reportv.com.ar/finder/index/2680"
        width={1560}
        height={790}
      ></iframe>
      <Control />
    </div>
  );
}
