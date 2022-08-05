import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isActive &&
    `color: white; border-radius: 30px; background-color: #5843E4`}
`;
export default function Header() {
  return (
    <nav className="nav">
      <StyledLink to="/" $isActive>
        Accueil
      </StyledLink>
      <StyledLink to="/survey/1" $isActive>
        Questionnaire
      </StyledLink>
      <StyledLink to="/freelances" $isActive>
        Freelances
      </StyledLink>
    </nav>
  );
}
