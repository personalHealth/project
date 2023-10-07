"use client";
import React, { useState, Suspense } from "react";

export default function SalaMovie({ movieFind }) {
  const [link, setLink] = useState(movieFind?.link1);

  return (
    <>
      <Suspense fallback="Cargando..">
        <iframe
          id="sala movie"
          className="absolute min-h-[50%] sm:min-h-[89dvh] lg:min-h-[93dvh] w-[90dvw]"
          width="1720"
          src={!link ? movieFind?.link1 : link}
          title={"Pelis Estrenos"}
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
          allowfullscreen="fullscreen, autoplay"
        ></iframe>
      </Suspense>
      <div className="absolute inset-x-0 bottom-0 flex justify-evenly items-center h-auto">
        <div className="flex gap-3">
          <button
            id="buttonchange"
            className="btn-primary"
            type="button"
            onClick={() => setLink(movieFind.link1)}
          >
            VER 👀
          </button>
          {movieFind?.link2 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(movieFind.link2)}
            >
              VER 👀
            </button>
          ) : null}
          {/* <legend>Solo con bloqueador de anuncios!!</legend> */}
          {movieFind?.link3 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(movieFind.link3)}
            >
              VER 👀
            </button>
          ) : null}
          <label className="flex absolute gap-3 rating rating-lg px-3 bottom-3 right-3">
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <p className="text-lg">Raiting: {movieFind.rating}</p>
          </label>
        </div>
      </div>
    </>
  );
}
