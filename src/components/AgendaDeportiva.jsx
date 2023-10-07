"use client";
import { useState } from "react";

export default function AgendaDeportiva() {
  const [show, setShow] = useState(false);

  return (
    <div
      id="home"
      className="reletive flex-col w-32 h-12 z-10 rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-sky-200"
    >
      <button type="button" onClick={() => setShow(!show)}>
        {!show ? (
          <p>📅 Agenda Deportiva</p>
        ) : (
          <p className="text-amber-600">Cerrar Agenda</p>
        )}
      </button>
      {show ? (
        <iframe
          className="absolute flex left-2 mt-6 md:w-6/12 h-4/6 md:left-1/3"
          title="agenda"
          allowfullscreen="true"
          src="https://futbol-libre.org/agenda/"
        ></iframe>
      ) : null}
    </div>
  );
}
