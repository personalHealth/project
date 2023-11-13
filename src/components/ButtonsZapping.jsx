import Link from "next/link";

export default function ButtonsZapping(id) {
  const currentChannel = () => {
    if (parseInt(id.id[0]) >= 64) {
      return 1;
    } else if (parseInt(id.id[0]) <= 1) {
      return 64;
    } else return parseInt(id.id[0]);
  };

  return (
    <div className="flex absolute bottom-3 right-60 ">
      <Link
        className="h-9 gap-3 flex justify-center items-center w-24 px-1 py-1 bg-sky-500 rounded text-lg mr-3"
        href={`/transmision/${currentChannel() - 1}`}
      >
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/25/circled-chevron-left.png"
          alt="circled-chevron-left"
        />
        ANT.
      </Link>
      <Link
        className="h-9 gap-3 flex justify-center items-center w-24 px-1 py-1 bg-sky-500 rounded text-lg"
        href={`/transmision/${currentChannel() + 1}`}
      >
        SIG.
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
          alt="circled-chevron-right--v1"
        />
      </Link>
    </div>
  );
}
