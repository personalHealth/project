import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Admin() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const admin = () => {
    if (user?.id === process.env.NEXT_PUBLIC_KINDE_ADMIN) return true;
    else return false;
  };
  if (!admin())
    return <h2 className="text-3xl text-center">Debes ser admininstrador</h2>;
  else
    return (
      <section className="flex flex-col md:flex-row">
        <article>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ring-2">
              Agregar nuevo Canal TV
            </div>
            <div className="collapse-content">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfafP7JAQcHwpb1L7dhOQ-nNblHV449uOkDpXFNoICpaKvb7A/viewform?embedded=true"
                width="540"
                height="700"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </article>
        <article>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ring-2">
              Agregar nueva Película
            </div>
            <div className="collapse-content">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSea822M46ZGVtiutivb7WhagvCaPsUd_BfZnCl2Kg5eMzzGeA/viewform?embedded=true"
                width="540"
                height="700"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </article>
        <article>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ring-2">
              Usuarios
            </div>
            <div className="collapse-content">
              <p>🧑🏻</p>
              <p>👩🏻</p>
            </div>
          </div>
        </article>
      </section>
    );
}
