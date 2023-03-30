import {
  Bar,
  FiltersDiv,
  Search,
  BtnContainer,
  BtnSearch,
  BtnClear,
  FilterContainer,
  CheckBox
} from "./Styles";
import Image from "next/image";

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
          <label>Filtrar por nome</label>
          <Search placeholder="Insira o nome aqui" type="name" />
        </FilterContainer>
        <FilterContainer>
          <label>Filtrar por especie</label>
          <Search placeholder="Insira a especie aqui" type="name" />
        </FilterContainer>
        <FilterContainer>
          <label>Status</label>
          <select>
            <option></option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </FilterContainer>
        <FilterContainer>
          <label>Genero</label>
          <select>
            <option></option>
            <option value="male">Macho</option>
            <option value="female">Femea</option>
            <option value="genderless">Sem gênero</option>
            <option value="unknown">Desconehcido</option>
          </select>
        </FilterContainer>
        <FilterContainer>
          <label>Selecionar Favoritos</label>
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
