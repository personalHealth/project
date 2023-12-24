import Link from "next/link";
import { ArrowRight, ArrowLeft } from "@/app/utils/icons";

export default function ButtonsZapping({ id }) {
  const currentChannel = () => {
    if (parseInt(id[0]) > 63) {
      return 0;
    } else if (parseInt(id[0]) < 1) {
      return 65;
    } else return parseInt(id[0]);
  };

  return (
    <div className="flex absolute bottom-60 right-24 sm:bottom-12 sm:right-64 lg:bottom-3">
      <Link
        className="h-9 gap-1 flex justify-center items-center w-24 px-1 py-1 bg-sky-500 rounded text-lg mr-3"
        href={`/transmision/${currentChannel() - 1}`}
      >
        <ArrowLeft />
        <strong>ANT.</strong>
      </Link>
      <Link
        className="h-9 gap-3 flex justify-center items-center w-24 px-1 py-1 bg-sky-500 rounded text-lg"
        href={`/transmision/${currentChannel() + 1}`}
      >
        <strong>SIG.</strong>
        <ArrowRight />
      </Link>
    </div>
  );
}
