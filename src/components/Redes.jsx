"use client";
import React from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import runOneSignal from "@/app/utils/notifications";
import { useDetectAdBlock } from "adblock-detect-react";

export default function Redes() {
  const adBlockDetected = useDetectAdBlock();

  if (adBlockDetected === true) {
    runOneSignal();
  }

  return (
    <WhatsappShareButton
      title="Mira la mejor tv 📺 y pelis estrenos 🍿 aquí !! "
      separator="👉🏻 "
      url="https://tvhd.vercel.app"
    >
      <WhatsappIcon size={32} round={true} />
    </WhatsappShareButton>
  );
}
