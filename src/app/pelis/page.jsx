import React from "react";
import getMovies from "@/app/data/movies";
import Movies from "@/components/Movies";
import Logo from "@/components/Logo";
import ButtonHome from "@/components/ButtonHome";

export const allmovies = await getMovies();
export default async function Pelis() {
  return (
    <div className="flex flex-col w-[100dvw] h-[100dvh]">
      <section className="flex gap-3">
        <Logo />
        <h2
          className="flex items-center text-3xl font-semibold
         bg-gradient-to-b from-blue-500 to-white bg-clip-text text-transparent"
        >
          PELICULAS ESTRENOS
        </h2>
      </section>
      <Movies allmovies={allmovies} />
      <ButtonHome />
    </div>
  );
}
