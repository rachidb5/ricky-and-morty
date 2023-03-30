import styled from "styled-components";

export const Bar = styled.nav`
  padding: 2%;
  margin: 0 !important;
  width: 20%;
  z-index: 100;
  background-color: #202020;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FiltersDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 200%;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom:5%;
`;

export const CheckBox = styled.input`
  margin-left:1%;
  margin-right:auto;
`

export const BtnSearch = styled.button``;
export const BtnClear = styled.button``;
export const Search = styled.input`
  background-color: #303030;
  border-right: none;
  width: 100%;
  height: 20px;
`;
