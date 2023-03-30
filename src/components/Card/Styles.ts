import styled from "styled-components";

export const Btn = styled.button`
  height: 40px;
  width: 180px;
  color: #fff;
  background: #1366e2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0a5cd0;
  }
`;
export const Wrapper = styled.div`
width: 300px;
height: 500px;
background: white;
margin: auto;
position: relative;
overflow: hidden;
border-radius: 10px 10px 10px 10px;
box-shadow: 0;
transform: scale(0.95);
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
