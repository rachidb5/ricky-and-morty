import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80%;
  background-color: #202020;
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
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
`;

export const FavBtn = styled.button`
  width:1.5rem;
  height:1rem;
  padding:0;
  margin:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
