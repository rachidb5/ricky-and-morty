import Head from "next/head";
import Card from "../components/Card/Card";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "@/components/loading/Loading";
import SideBar from "@/components/SideBar/SideBar";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Header from "@/components/Header/Header";

export default function Favoritos() {
  let arr: number[] = [];
  if (!JSON.parse(localStorage.getItem("favs"))) {
    localStorage.setItem("favs", JSON.stringify(arr));
  }
  arr = JSON.parse(localStorage.getItem("favs"));

  const fetchCharacters = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${arr}`);
    return res.json();
  };

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["Characters"],
    () => fetchCharacters(),
    { keepPreviousData: true }
  );

  if (isLoading) return <Loading />;
  //if (error) return 'An error has occurred: ' + error.message
  return (
    <>
      {console.log(data)}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="center-container">
        <div className="main">
          <Header />
          <div className="main-header">
            <h2>Personagens</h2>
            <div id="darkmode">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="label">
                <BsMoonStarsFill color="white" />
                <BsFillSunFill color="yellow" />
                <div className="ball"></div>
              </label>
            </div>
          </div>

          {arr.length === 0 ? (
            <>
              <span>Nenhum personagem favoritado</span>
            </>
          ) : arr.length === 1 ? (
            <Card
              key={data.id}
              img={data.image}
              name={data.name}
              id={data.id}
            />
          ) : !data && data == undefined ? (
            <>
              <span>Algo deu errado</span>
            </>
          ) : (
            data.map((c: { id: number; image: string; name: string }) => (
              <Card key={c.id} img={c.image} name={c.name} id={c.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
