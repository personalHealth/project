import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link id="page-header" href="/">
      <Image
        className="aspect-auto"
        src="/android-chrome-192x192.png"
        alt="TV HD"
        width={60}
        height={60}
      />
    </Link>
  );
}
