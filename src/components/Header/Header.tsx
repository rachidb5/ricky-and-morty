import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Ball } from './Styles'

export default function Header() {
  return (
    <>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <Ball />
        </label>
      </div>
    </>
  );
}
