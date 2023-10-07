import React from "react";
import { allmovies } from "@/components/Movies";
import ButtonHome from "@/components/ButtonHome";
import SalaMovie from "@/components/SalaMovie";

export default function SalaMovies({ params }) {
  const movieFind = allmovies.find((movie) => movie.id === params.id);

  return (
    <div className="flex flex-col items-center w-[100dvw] h-[100dvh] bg-slate-800">
      <SalaMovie movieFind={movieFind} />
      <ButtonHome />
    </div>
  );
}
