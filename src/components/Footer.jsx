import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Redes from "@/components/Redes";

export default function Footer() {
  return (
    <div>
      <ul className="fixed w-full mt-6 bottom-0 bg-slate-800 flex align-center justify-evenly">
        <li className="flex items-center">
          <Link
            className="text-xl text-white font-bold duration-300 hover:text-sky-600 hover:border-b-4 border-sky-600"
            href="/aviso"
          >
            Aviso Legal
          </Link>
        </li>
        <li id="top-nav">
          <Logo href="#home" />
        </li>
        <li className="flex items-center gap-3">
          <p className="text-xl text-white font-bold duration-300 hover:text-sky-600 hover:border-b-4 border-sky-600">
            Compartír por
          </p>
          <Redes />
        </li>
      </ul>
    </div>
  );
}
