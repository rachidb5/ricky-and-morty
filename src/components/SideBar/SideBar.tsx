import {
  Bar,
  FiltersDiv,
  Search,
  BtnContainer,
  BtnSearch,
  BtnClear,
  FilterContainer,
  CheckBox,
  Label,
} from "./Styles";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "../../state/actions/filtersActions";

interface IFilters {
  name: string;
  especie: string;
  genero: string;
  status: string;
  favorito: boolean;
}

export default function SideBar() {
  const [name, setName] = useState("");
  const [especie, setEspecie] = useState("");
  const [status, setStatus] = useState("");
  const [genero, setGenero] = useState("");
  const dispatch = useDispatch();
  const filtersData = useSelector((state: any) => state);

  const handleCLick = () => {
    dispatch(getFilters({
      name,
      especie,
      status,
      genero,
    }))
    console.log(filtersData)
  }

  const handleCLear = () => {
    dispatch(getFilters({
      name: '',
      especie:'',
      status:'',
      genero:'',
    }))
    console.log(filtersData)
  }
  return (
    <Bar>
      <Image
        src="/logo.png"
        alt="Ricky and morty's logo"
        width={150}
        height={75}
      />
      <h1>Personalize sua busca</h1>
      <FiltersDiv>
        <FilterContainer>
          <Label>Filtrar por nome</Label>
          <Search
            placeholder="Insira o nome aqui"
            type="name"
            onChange={({ target: { value } }) => setName(value)}
          />
        </FilterContainer>
        <FilterContainer>
          <Label>Filtrar por especie</Label>
          <Search
            placeholder="Insira a especie aqui"
            type="name"
            onChange={({ target: { value } }) => setEspecie(value)}
          />
        </FilterContainer>
        <FilterContainer>
          <Label>Status</Label>
          <select onChange={({ target: { value } }) => setStatus(value)}>
            <option></option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </FilterContainer>
        <FilterContainer>
          <Label>Genero</Label>
          <select onChange={({ target: { value } }) => setGenero(value)}>
            <option></option>
            <option value="male">Macho</option>
            <option value="female">Femea</option>
            <option value="genderless">Sem gênero</option>
            <option value="unknown">Desconehcido</option>
          </select>
        </FilterContainer>
        <BtnContainer>
          <BtnClear  onClick={handleCLear} >Limpar</BtnClear>
          <BtnSearch onClick={handleCLick} >Buscar</BtnSearch>
        </BtnContainer>
      </FiltersDiv>
    </Bar>
  );
}
