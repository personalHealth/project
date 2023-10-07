import React from "react";
import { allchannels } from "@/components/Channels";
import Link from "next/link";

export default function Control() {
  return (
    <div className="fixed right-0 z-20 w-1 h-screen overflow-y-scroll overflow-x-hidden scrollbar-page">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content fixed z-10 decoration-0 text-center rounded-full p-4 bg-sky-500 bottom-12 right-3 w-16 h-16 ">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
            <p className="text-xl">🕹</p>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div>
            {allchannels.map((channel) => (
              <Link
                key={channel.id}
                className="z-10 flex flex-col w-36 items-center justify-center justify-items-center text-center font-bold text-white p-0 h-24 sm:m-1 m-1 shadow-xl rounded-xl sm:w-52 bg-transp hover:bg-sky-300"
                href={`/transmision/${channel.id}`}
              >
                <p>{channel.nombre}</p>
                <img
                  className="ml-1 aspect-auto"
                  src={channel.imagen}
                  alt={channel.nombre}
                  width={60}
                  height={60}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
