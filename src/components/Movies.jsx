import getMovies from "@/app/data/movies";
import CardMovie from "@/components/CardMovie";

export const allmovies = await getMovies();
const ratings = (rating) => {
  if (rating >= 8) return "🧡";
  else if (rating <= 7.9) return ".";
};
export default async function Movies() {
  return (
    <div className="overflow-auto">
      <div className="min-h-screen bg-cover bg-gradient-to-b from-slate-900 to-slate-600 flex align-center justify-center flex-wrap mb-12 gap-6 mt-3 md:gap-3 ">
        {allmovies?.map((movie) => (
          <div id="movie" key={movie.id} className="relative mb-3 ">
            <span className="z-30 absolute top-1 right-2">
              {ratings(movie.rating)}
            </span>
            <CardMovie
              id={movie.id}
              nombre={movie.nombre}
              poster={movie.poster}
              descripcion={movie.descripcion}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
