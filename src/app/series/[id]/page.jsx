import React from "react";
import getSeries from "@/app/data/series";
import ButtonHome from "@/components/ButtonHome";
import SalaSerie from "@/components/SalaSerie";

export default async function SalaSeries({ params }) {
  const allSeries = await getSeries();
  const serieFind = allSeries.find((serie) => serie.id === params.id);

  return (
    <div className="flex flex-col items-center w-[100dvw] h-[100dvh] bg-slate-800">
      <SalaSerie serieFind={serieFind} />
      <ButtonHome />
    </div>
  );
}
