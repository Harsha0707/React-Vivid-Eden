import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;


function Logo() {
  const { isDarkMode } = useDarkMode();


  const color = isDarkMode ? "dark" : "light";

  return (
    <StyledLogo>
      <h1 className={`title ${color}`}>Vivid Eden</h1>
    </StyledLogo>
  );
}

export default Logo;
