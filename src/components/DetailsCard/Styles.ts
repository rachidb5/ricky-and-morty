import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80%;
  background-color: #202020;
  @media (max-width: 800px) {
    width:90%;
  }
  @media (max-width: 730px) {
    justify-content:center;
    flex-direction:column;
  }
  `;
export const CharName = styled.div`
  display:none;
  @media (max-width: 730px) {
    display:flex;
    width:90%;
    padding:2%;
  }
  `;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
  justify-content: space-between;
  @media (max-width: 730px) {
    display:none;
  }
`;
export const DetailsResponsive = styled.div`
  display: none;
  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2%;
    justify-content: space-between;
  }
`;
export const ContainerImage= styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2%;
    justify-content: space-between;
    @media (max-width: 730px) {
      width:60%;
      margin-left:auto;
      margin-right:auto;
      justify-content: center;
    }
    @media (max-width: 300px) {
      width:80%;
      margin-left:auto;
      margin-right:auto;
      justify-content: center;
    }
`;

export const FavBtn = styled.button`
  width:1.5rem;
  height:1rem;
  padding:0;
  margin-left:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 300px) {
    margin:10%;
  }
`;
