"use client";
import React, { useState, Suspense } from "react";

export default function SalaSerie({ serieFind }) {
  const [link, setLink] = useState(serieFind?.link1);

  return (
    <>
      <Suspense id={link.id} fallback="Cargando...">
        <iframe
          id="sala movie"
          className="absolute min-h-[50%] sm:min-h-[89dvh] lg:min-h-[93dvh] w-[90dvw]"
          width="1720"
          src={!link ? serieFind?.link1 : link}
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
            onClick={() => setLink(serieFind.link1)}
          >
            CAP. 1 👀
          </button>
          {serieFind?.link2 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(serieFind.link2)}
            >
              CAP. 2 👀
            </button>
          ) : null}
          {serieFind?.link3 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(serieFind.link3)}
            >
              CAP. 3 👀
            </button>
          ) : null}
          {serieFind?.link4 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(serieFind.link4)}
            >
              CAP. 4 👀
            </button>
          ) : null}
          {serieFind?.link5 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(serieFind.link5)}
            >
              CAP. 5 👀
            </button>
          ) : null}
          {serieFind?.link6 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(serieFind.link6)}
            >
              CAP. 6 👀
            </button>
          ) : null}
          {serieFind?.link7 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(serieFind.link7)}
            >
              CAP. 7 👀
            </button>
          ) : null}
          <label className="flex absolute gap-3 rating rating-lg px-3 bottom-3 right-3">
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <p className="text-lg">Raiting: {serieFind.puntuacion}</p>
          </label>
        </div>
      </div>
    </>
  );
}
