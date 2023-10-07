import {
  getKindeServerSession,
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default function Profile() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  const auth = isAuthenticated();

  const admin = () => {
    if (user?.id === process.env.NEXT_PUBLIC_KINDE_ADMIN) return true;
    else return false;
  };

  if (!auth)
    return (
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-primary btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content right-3 mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-32 gap-3"
        >
          <li>
            <LoginLink className="btn btn-primary px-9">
              Iniciar Sesión
            </LoginLink>
          </li>
          <li>
            <RegisterLink className="btn btn-outline">Registrar</RegisterLink>
          </li>
        </ul>
      </div>
    );
  else
    return (
      <div title={user.given_name} className="flex items-center">
        <section className="flex flex-col justify-center items-center gap-1">
          <img
            className="rounded-full"
            src={
              user.picture
                ? user.picture
                : "https://th.bing.com/th/id/R.d750ea0306354906e3afa3c45694c41f?rik=Py2w0ZCpwSB3UQ&pid=ImgRaw&r=0"
            }
            alt={user.given_name}
            width={40}
            height={40}
          />
          <LogoutLink className="text-slate-50 hidden md:contents">
            Cerrar Sesión
          </LogoutLink>
        </section>
        <section className="text-white px-1 ring-1 hover:opacity-60">
          {admin() ? <Link href={"/admin"}>admin</Link> : null}
        </section>
      </div>
    );
}
