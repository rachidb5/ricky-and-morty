import { useQuery } from "react-query";
import { useRouter } from "next/router";
import DetailsCard from "@/components/DetailsCard/DetailsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/loading/Loading";

export default function Character() {
  const router = useRouter();
  const characterId = router.query.characterId as string;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)

  async function fetchData(id: string) {
    const endpoint = `https://rickandmortyapi.com/api/character/${id}`;
    await axios
      .get(endpoint)
      .then(function (response) {
        setData(response);
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    if (router.isReady) {
        console.log(router.query.characterId)
      fetchData(characterId);
    }
  }, [router.isReady]);

  if(loading) return <Loading />
  return (
    <div>
      <span>{data.data.name}</span>
    </div>
  );
}
