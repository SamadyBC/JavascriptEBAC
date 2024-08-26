import styled from "styled-components";

export const Title = styled.h1`
  font-family: sans-serif;
  color: #00f;
  font-size: 3rem;

  span {
    color: #f00;
    display: block;
  }
`;

export const Btn = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #00f;
  color: #000;
  font-size: 3rem;
  margin: 0 auto;
  display: block;
  padding: 10px;

  font-size: "${(props) => `${props.font}px`}";

  :before {
    content: "${(props) => `${props.name}`}";
  }
`;

export const BtnNew = styled(Btn)`
  background-color: #090;
`;
