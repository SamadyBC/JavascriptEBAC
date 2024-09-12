import styled from "styled-components";

export const Title = styled.h1`
  font-family: sans-serif;
  color: #009;
  font-size: 2rem;

  span {
    color: #454545;
    display: block;
    font-size: 1.5rem
  }
`;

export const Subtitle = styled(Title)`
  font-size: 25px

`;

export const Item = styled.h4`
  font-size: 14px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
