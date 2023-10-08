import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Sign() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/android-chrome-512x512.png"
          className="max-w-sm rounded-lg shadow-2xl"
          width={180}
          height={180}
        />
        <div>
          <h1 className="text-6xl text-blue-500  md:text-8xl font-bold ">
            Bienvenido a TV HD!
          </h1>
          <section className="py-9">
            <p className="py-1 text-lg text-gray-800 dark:text-gray-100">
              Disfruta la mejor 📺 televisión Argentina, y los pack hd HBO, pack
              FÚTBOL, pack HOT y más aquí.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-100">
              Mirá los últimos extrénos de 🎬 películas en exclusiva aquí.
            </p>
            <p className="py-1 text-lg text-gray-800 dark:text-gray-100">
              Para ver los contenidos, debe estar registrado
            </p>
          </section>
          <div className="flex gap-3 justify-center sm:justify-normal">
            <LoginLink className="btn btn-outline">Iniciar Sesión</LoginLink>
            <RegisterLink className="btn btn-accent">Registrar</RegisterLink>
          </div>
        </div>
      </div>
    </div>
  );
}
