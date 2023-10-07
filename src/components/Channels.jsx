import getChannels from "@/app/data/chanels";
import CardChanell from "@/components/CardChanell";
import AgendaDeportiva from "@/components/AgendaDeportiva";

export const allchannels = await getChannels();
export default async function Chanells() {
  return (
    <div className="">
      <div className="flex justify-center items-center my-1 gap-1 ">
        <AgendaDeportiva />
      </div>
      <div className="min-h-screen bg-cover flex align-center justify-center flex-wrap mb-12 gap-6 mt-3 md:gap-3 ">
        {allchannels?.map((channel) => (
          <div id="chanel" key={channel.id} className="mb-3 ">
            <CardChanell
              id={channel.id}
              nombre={channel.nombre}
              imagen={channel.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
