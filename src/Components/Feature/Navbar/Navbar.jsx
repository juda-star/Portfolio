import styled from "styled-components";
import { Link } from "react-router-dom";
import { MagicContext } from "../Translate/Translate";
import {
  IconName,
  FaHome,
  FaHatWizard,
  FaEnvelope,
  FaCalendar,
} from "react-icons/fa";
const StyledNavBar = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;

  li {
    margin: 0 32px;
  }
`;

const StyledNavBarContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 100px;
  left: -13px;
`;

function NavBar() {
  const controler = MagicContext();

  return (
    <StyledNavBarContainer>
      <StyledNavBar>
        <li>
          <Link to="/">
            {" "}
            <FaHome fontSize="x-large" style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            {<FaCalendar fontSize="x-large" style={{ color: "black" }} />}
          </Link>
        </li>
        <li>
          <Link to="/Skills">
            <FaHatWizard fontSize="x-large" style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link to="/ContactMe">
            {" "}
            <FaEnvelope fontSize="x-large" style={{ color: "black" }} />
          </Link>
        </li>
        <button onClick={controler.CHngaeButton}>Language</button>
      </StyledNavBar>
    </StyledNavBarContainer>
  );
}
export default NavBar;
