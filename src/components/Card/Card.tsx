import { Btn, Wrapper } from "./Styles";
import { useRouter } from "next/router";

type Props = {
  img: string;
  name: string;
  id: number;
};

export default function Card(props: Props) {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <img src={props.img} />
        <h2>{props.name}</h2>
        <Btn onClick={() => router.push(`/character/${props.id}`)}>
          Ver detalhes
        </Btn>
      </Wrapper>
    </>
  );
}
