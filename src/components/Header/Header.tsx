import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Ricky and morty's logo"
          width={200}
          height={100}
        />
      </Link>
    </header>
  );
}
