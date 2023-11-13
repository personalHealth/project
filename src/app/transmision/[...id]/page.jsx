import React from "react";
import { allchannels } from "@/components/Channels";
import Control from "@/components/Control";
import ButtonHome from "@/components/ButtonHome";
import Transmisions from "@/components/Transmisions";
import ButtonsZapping from "@/components/ButtonsZapping";

export default function Transmision({ params }) {
  const chanellFind = allchannels.find(
    (channel) => channel.id === params.id[0]
  );

  return (
    <div
      className="flex flex-col items-center w-[100dvw] h-[100dvh] bg-slate-800"
      // style={{
      //   backgroundImage: `url("https://th.bing.com/th/id/R.846913110b636d7682c80cbf1873e0d7?rik=B8ONzWGCVt%2bkxQ&pid=ImgRaw&r=0")`,
      //   backgroundSize: "cover",
      // }}
    >
      <Transmisions chanellFind={chanellFind} />
      <Control />
      <ButtonsZapping id={params.id} />
      <ButtonHome />
    </div>
  );
}
