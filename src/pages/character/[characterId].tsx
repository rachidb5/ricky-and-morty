import { useQuery } from "react-query";
import { useRouter } from "next/router";
import DetailsCard from "@/components/DetailsCard/DetailsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/loading/Loading";
import Header from "@/components/Header/Header";


interface IObj {
  name: string,
}
interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  location: IObj;
  gender: string;
  origin: IObj;
  type: string;
}

export default function Character() {
  const router = useRouter();
  const characterId = router.query.characterId as string;
  const [data, setData] = useState<ICharacter>({
    name: "",
    id: 0,
    image: "",
    species:"",
    status:"",
    location:{
      name:""
    },
    gender:"",
    origin:{
      name:""
    },
    type:"",
  });
  const [loading, setLoading] = useState(true);

  async function fetchData(id: string) {
    const endpoint = `https://rickandmortyapi.com/api/character/${id}`;
    await axios
      .get(endpoint)
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.characterId);
      fetchData(characterId);
    }
  }, [router.isReady]);

  if (loading) return <Loading />;
  {console.log(data)}
  return (
    <div>
      <Header />
      <DetailsCard
        name={data.name}
        img={data.image}
        id = { data.id }
        species={data.species}
        location={data.location.name}
        status={data.status}
        gender={data.gender}
        origin={data.origin.name}
        type={data.type}
      />
    </div>
  );
}
