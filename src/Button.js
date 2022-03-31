
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#52B6FF" : "#888"};
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  padding: 36px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
`;

export default Button;