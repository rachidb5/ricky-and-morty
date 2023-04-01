import styled from "styled-components";

export const Btn = styled.button`
  height: 40px;
  width: 100%;
  color: #fff;
  background: #0a5cd0;
  border: none;
  margin-bottom:0;
  cursor: pointer;
  &:hover {
    background: #63cbfb;
  }
`;
export const Wrapper = styled.div`
  width: 200px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height: 370px;
  background: #202020;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  margin: 1%;
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
`
export const Container = styled.div`
  width: 280px;
  height: 500px;
  margin: 30px auto;
`;

export const TxtContainer = styled.div`
  padding-left:5px;
`;
