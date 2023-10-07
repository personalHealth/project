"use client";
import React, { useState, Suspense } from "react";

export default function Transmisions({ chanellFind }) {
  const [link, setLink] = useState(chanellFind?.link1);
  return (
    <>
      <Suspense fallback="Cargando..">
        <iframe
          id="transmision"
          className="absolute min-h-[50%] sm:min-h-[89dvh] lg:min-h-[93dvh] w-[90dvw]"
          width="1720"
          src={!link ? chanellFind?.link1 : link}
          title={`Tv en vivo: ${chanellFind.nombre}`}
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
            onClick={() => setLink(chanellFind.link1)}
          >
            VER 👀
          </button>
          {chanellFind?.link2 ? (
            <button
              className="btn-secondary"
              type="button"
              onClick={() => setLink(chanellFind.link2)}
            >
              VER 👀
            </button>
          ) : null}
          {/* <legend>Solo con bloqueador de anuncios!!</legend> */}
          {chanellFind?.link3 ? (
            <button
              className="btn-secondary"
              type="button"
              onClick={() => setLink(chanellFind.link3)}
            >
              VER 👀
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
