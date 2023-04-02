import styled from "styled-components";

export const Bar = styled.nav`
  padding: 2%;
  margin: 0 0 20px 0 !important;
  width: 100%;
  max-height: 370px;
  z-index: 100;
  background-color: #202020;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const CheckBox = styled.input`
  margin-left: 1%;
  margin-right: auto;
`;

export const BtnSearch = styled.button`
  height: 40px;
  width: 40%;
  color: #fff;
  background: #63cbfb;
  border: none;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    background: #53abee;
  }
`;
export const BtnClear = styled.button`
  height: 40px;
  width: 40%;
  color: #fff;
  background: #6cac6c;
  border: none;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    background: #1b6f20;
  }
`;
export const Search = styled.input`
  background-color: #303030;
  border-right: none;
  border-top: none;
  border-left: none;
  width: 100%;
  height: 25px;
  border-color: white;
`;

export const Label = styled.label`
  margin-bottom: 6px;
`;
