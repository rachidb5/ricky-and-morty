import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Image from 'next/image'
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href={'/'}>
    <Image src="/logo.png" alt="Ricky and morty's logo" width={200} height={100}/>
      </Link>
    <div id="darkmode">
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <BsMoonStarsFill color="white" />
        <BsFillSunFill color="yellow" />
        <div className="ball"></div>
      </label>
    </div>
    </header>
  );
}
