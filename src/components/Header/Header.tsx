import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Image from 'next/image'

export default function Header() {
  return (
    <header>
    <Image src="/logo.png" alt="Ricky and morty's logo" width={200} height={100}/>
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
