import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardChanell({ id, nombre, imagen }) {
  return (
    <Link
      title={nombre}
      href={`transmision/${id}`}
      className="text-center text-gray-600 decoration-0"
    >
      {/* <h3 className="m-0 mb-1">{name}</h3> */}
      <div className="card-ui">
        <Image
          className="m-0 w-24 h-auto aspect-auto"
          src={imagen}
          alt={nombre}
          width={90}
          height={90}
        />
      </div>
    </Link>
  );
}
