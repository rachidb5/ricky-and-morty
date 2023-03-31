import { Container, Item, Row, Details, FavBtn } from "./Styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect } from "react";

type Props = {
  id: number;
  name: string;
  img: string;
  species: string;
  status: string;
  location: string;
  gender: string;
  origin: string;
  type: string;
};

export default function DetailsCard(props: Props) {
  const [fav, setFav] = useState(false);
  const favoriteCharacter = () => {
    let newArray: number[] = []
    if (!localStorage.getItem("favs")) {
      localStorage.setItem("favs", JSON.stringify([props.id]));
      setFav(true);
      return null;
    }
    if(fav) {
        newArray = JSON.parse(localStorage.getItem("favs")).filter((f) => f !== props.id)
        localStorage.setItem("favs", JSON.stringify(newArray))
        setFav(false)
    } else {
        newArray = JSON.parse(localStorage.getItem("favs"))
        newArray.push(props.id)
        localStorage.setItem("favs", JSON.stringify(newArray))
        setFav(true)
    }
  };

useEffect(() => {
    if(localStorage.getItem("favs")) {
        JSON.parse(localStorage.getItem("favs")).filter((f) => f === props.id)
          .length === 0
          ? setFav(false)
          : setFav(true);
      }
}, [fav])

  return (
    <Container>
      <div>
        <img src={props.img} />
      </div>
      <Details>
        <Row>
          <Item>
            <span>Nome</span>
            <h1>{props.name}</h1>
          </Item>
          <FavBtn type="button" onClick={() => favoriteCharacter()}>
            {fav ? (
              <AiFillHeart size="2em" color="red" />
            ) : (
              <AiOutlineHeart size="2em" color="white" />
            )}
          </FavBtn>
        </Row>
        <Row>
          <Item>
            <span>Espécie</span>
            <h1>{props.species}</h1>
          </Item>
          <Item>
            <span>Local</span>
            <h1>{props.location}</h1>
          </Item>
          <Item>
            <span>Gender</span>
            <h1>{props.gender}</h1>
          </Item>
        </Row>
        <Row>
          <Item>
            <span>Origem</span>
            <h1>{props.origin}</h1>
          </Item>
          <Item>
            <span>Status</span>
            <h1>{props.status}</h1>
          </Item>
          <Item>
            <span>Tipo</span>
            <h1>{props.type}</h1>
          </Item>
        </Row>
      </Details>
    </Container>
  );
}
