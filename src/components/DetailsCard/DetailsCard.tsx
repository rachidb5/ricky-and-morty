import {
  Container,
  Item,
  Row,
  Details,
  FavBtn,
  CharName,
  ContainerImage,
  DetailsResponsive,
} from "./Styles";
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
    let newArray: number[] = [];
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
    <Container>
      <div>
        <CharName>
          <Item>
            <span className="responsiv-span">Nome</span>
            <h1 className="responsive-h1">{props.name}</h1>
          </Item>
        </CharName>
        <ContainerImage>
          <img src={props.img} />
        </ContainerImage>
      </div>
      <DetailsResponsive>
        <Row>
          <FavBtn
            role="fav-det"
            type="button"
            onClick={() => favoriteCharacter()}
          >
            {fav ? (
              <AiFillHeart size="2em" color="red" />
            ) : (
              <AiOutlineHeart size="2em" color="white" />
            )}
          </FavBtn>
        </Row>
        <Row>
          <Item>
            <span className="responsive-span">Espécie</span>
            <h2 className="responsive-h2">{props.species}</h2>
          </Item>
          <Item>
            <span className="responsive-span">Local</span>
            <h2 className="responsive-h2">{props.location}</h2>
          </Item>
          <Item>
            <span className="responsive-span">Gender</span>
            <h2 className="responsive-h2">{props.gender}</h2>
          </Item>
        </Row>
        <Row>
          <Item>
            <span className="responsive-span">Origem</span>
            <h2 className="responsive-h2">{props.origin}</h2>
          </Item>
          <Item>
            <span className="responsive-span">Status</span>
            <h2 className="responsive-h2">{props.status}</h2>
          </Item>
          <Item>
            <span className="responsive-span">Tipo</span>
            <h2 className="responsive-h2">{props.type}</h2>
          </Item>
        </Row>
      </DetailsResponsive>
      <Details>
        <Row>
          <Item>
            <span>Nome</span>
            <h1>{props.name}</h1>
          </Item>
          <FavBtn
            role="fav-det"
            type="button"
            onClick={() => favoriteCharacter()}
          >
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
            <h2>{props.species}</h2>
          </Item>
          <Item>
            <span>Local</span>
            <h2>{props.location}</h2>
          </Item>
          <Item>
            <span>Gender</span>
            <h2>{props.gender}</h2>
          </Item>
        </Row>
        <Row>
          <Item>
            <span>Origem</span>
            <h2>{props.origin}</h2>
          </Item>
          <Item>
            <span>Status</span>
            <h2>{props.status}</h2>
          </Item>
          <Item>
            <span>Tipo</span>
            <h2>{props.type}</h2>
          </Item>
        </Row>
      </Details>
    </Container>
  );
}
