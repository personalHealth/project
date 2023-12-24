import CardSerie from "@/components/CardSerie";

export default async function Series({ allseries }) {
  return (
    <div className="overflow-auto">
      <div className="min-h-screen bg-cover bg-gradient-to-b from-slate-900 to-slate-600 flex align-center justify-center flex-wrap mb-12 gap-6 mt-3 md:gap-3 ">
        {allseries &&
          allseries?.map((serie) => (
            <div id="movie" key={serie.id} className="relative mb-3 ">
              <CardSerie
                id={serie.id}
                nombre={serie.nombre}
                poster={serie.poster}
                descripcion={serie.descripcion}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
