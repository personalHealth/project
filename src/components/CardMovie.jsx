import React from "react";
import Link from "next/link";

export default function CardMovie({ id, nombre, poster, descripcion }) {
  return (
    <Link
      title={nombre}
      href={`pelis/${id}`}
      className="text-center text-white decoration-0 inline-block relative hover:scale-110"
    >
      {/* <h3 className="m-0 mb-1">{name}</h3> */}
      <div className="relative ">
        <div className="absolute inset-0 z-10 bg-slate-700 rounded-lg text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
          <p className="mx-auto overflow-auto">{descripcion}</p>
        </div>

        <div class="relative flex flex-wrap content-center">
          <img
            className="m-0 w-36 md:w-60 h-auto aspect-auto rounded-lg  "
            src={poster}
            alt={nombre}
            width={270}
            height={540}
          />
        </div>
      </div>
    </Link>
  );
}
