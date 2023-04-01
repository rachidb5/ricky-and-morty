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
  name: string
  especie: string,
  status: string,
  genero: string,
}
export default function SideBar() {
  const [filters, setFilters] = useState<IFilters>({
    name: '',
    especie: '',
    status: '',
    genero: '',
  });
  const dispatch = useDispatch();
  const filtersData = useSelector((state: any) => state);

  const handleCLick = () => {
    dispatch(
      getFilters(filters)
    );
  };

  const handleCLear = () => {
    dispatch(
      getFilters({
        name: "",
        especie: "",
        status: "",
        genero: "",
      })
    );
  };
  return (
    <Bar>
      <Image
        src="/logo.png"
        alt="Ricky and morty's logo"
        width={130}
        height={70}
      />

      <h1>Personalize sua busca</h1>
      <FiltersDiv>
        <FilterContainer>
          <Label>Filtrar por nome</Label>
          <Search
            placeholder="Insira o nome aqui"
            type="name"
            onChange={({ target: { value } }) => setFilters({...filters, name: value})}
          />
        </FilterContainer>
        <FilterContainer>
          <Label>Filtrar por especie</Label>
          <Search
            placeholder="Insira a especie aqui"
            type="name"
            onChange={({ target: { value } }) => setFilters({...filters, especie: value})}
          />
        </FilterContainer>
        <FilterContainer>
          <Label>Status</Label>
          <select onChange={({ target: { value } }) => setFilters({...filters, status: value})}>
            <option></option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </FilterContainer>
        <FilterContainer>
          <Label>Genero</Label>
          <select onChange={({ target: { value } }) => setFilters({...filters, genero: value})}>
            <option></option>
            <option value="male">Macho</option>
            <option value="female">Femea</option>
            <option value="genderless">Sem gênero</option>
            <option value="unknown">Desconehcido</option>
          </select>
        </FilterContainer>
        <BtnContainer>
          <BtnClear onClick={handleCLear}>Limpar</BtnClear>
          <BtnSearch onClick={handleCLick}>Buscar</BtnSearch>
        </BtnContainer>
      </FiltersDiv>
    </Bar>
  );
}
