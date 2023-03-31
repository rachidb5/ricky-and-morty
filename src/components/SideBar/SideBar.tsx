import {
  Bar,
  FiltersDiv,
  Search,
  BtnContainer,
  BtnSearch,
  BtnClear,
  FilterContainer,
  CheckBox,
  Label
} from "./Styles";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "../../state/actions/filtersActions";

export default function SideBar() {
  return (
    <Bar>
      <Image
        src="/logo.png"
        alt="Ricky and morty's logo"
        width={150}
        height={75}
      />
      <FiltersDiv>
        <FilterContainer>
          <Label>Filtrar por nome</Label>
          <Search placeholder="Insira o nome aqui" type="name" />
        </FilterContainer>
        <FilterContainer>
          <Label>Filtrar por especie</Label>
          <Search placeholder="Insira a especie aqui" type="name" />
        </FilterContainer>
        <FilterContainer>
          <Label>Status</Label>
          <select>
            <option></option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </FilterContainer>
        <FilterContainer>
          <Label>Genero</Label>
          <select>
            <option></option>
            <option value="male">Macho</option>
            <option value="female">Femea</option>
            <option value="genderless">Sem gênero</option>
            <option value="unknown">Desconehcido</option>
          </select>
        </FilterContainer>
        <FilterContainer>
          <Label>Selecionar Favoritos</Label>
          <CheckBox type="checkbox" />
        </FilterContainer>
        <BtnContainer>
          <BtnClear>Limpar</BtnClear>
          <BtnSearch>Buscar</BtnSearch>
        </BtnContainer>
      </FiltersDiv>
    </Bar>
  );
}
