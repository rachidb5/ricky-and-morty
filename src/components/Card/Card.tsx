import { Btn, Wrapper } from "./Styles";
import { useRouter } from "next/router";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { FavBtn } from "../DetailsCard/Styles";

type Props = {
  img: string;
  name: string;
  id: number;
};

export default function Card(props: Props) {
  const router = useRouter();
  const [fav, setFav] = useState(false);
  const favoriteCharacter = () => {
    let newArray: number[] = []
    if (!localStorage.getItem("favs")) {
      localStorage.setItem("favs", JSON.stringify([props.id]));
      setFav(true);
      return null;
    }
    if (fav) {
      newArray = JSON.parse(localStorage.getItem("favs")).filter(
        (f) => f !== props.id
      );
      localStorage.setItem("favs", JSON.stringify(newArray));
      setFav(false);
    } else {
      newArray = JSON.parse(localStorage.getItem("favs"));
      newArray.push(props.id);
      localStorage.setItem("favs", JSON.stringify(newArray));
      setFav(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("favs")) {
      JSON.parse(localStorage.getItem("favs")).filter((f) => f === props.id)
        .length === 0
        ? setFav(false)
        : setFav(true);
    }
  }, [fav]);
  return (
    <>
      <Wrapper>
        <img src={props.img} className="char-img" />
        <FavBtn type="button" onClick={() => favoriteCharacter()}>
          {fav ? (
            <AiFillHeart size="2em" color="red" />
          ) : (
            <AiOutlineHeart size="2em" color="white" />
          )}
        </FavBtn>
        <h2>{props.name}</h2>
        <Btn onClick={() => router.push(`/character/${props.id}`)}>
          Ver detalhes
        </Btn>
      </Wrapper>
    </>
  );
}
