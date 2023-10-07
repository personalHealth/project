import React from "react";
import ButtonHome from "@/components/ButtonHome";
import Control from "@/components/Control";

export default function Grilla() {
  return (
    <div className="flex h-[99.5vh] ">
      <div className="z-10 fixed w-64 h-12 left-1 bg-[#282828] text-center">
        <h3 className="py-1 text-lg">GRILLA</h3>
      </div>
      <ButtonHome />
      <iframe
        className="absolute h-[99vh] w-[99.5vw]"
        title="grilla"
        allowfullscreen="true"
        src="https://www.reportv.com.ar/finder/index/2996/" //2313 superconeactados
        width={1560}
        height={775}
      ></iframe>
      <Control />
    </div>
  );
}
