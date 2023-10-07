import React from "react";
import ButtonHome from "@/components/ButtonHome";

export default function Peliserie() {
  return (
    <div className="flex w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-hidden">
      <div className="absolute top-0 w-[1px] h-[1px] bg-[#223143] xl:left-3 xl:w-48 xl:h-16"></div>
      <ButtonHome />
      <iframe
        className="min-h-[100dvh] w-[100dvw]"
        title="movies"
        allowfullscreen="true"
        src="https://hd.repelis24.plus/" //https://pelisplus.lat/listado-peliculas/estrenos
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
}
