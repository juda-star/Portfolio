import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ThemeContext } from "../Translate/Translate";

const StyleIconLinkedin = { color: "#0A66C2", font: "larger" };

const StyleIconGit = { color: "#161B22" };

const StyleIconFacebook = { color: "#1877F2" };

function Footer() {
  const changeT = ThemeContext();
  console.log(changeT.stateTheme);
  const MainFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${changeT.stateTheme.Theme ? "white" : "black"};
  `;
  return (
    <MainFooter>
      <div>
        <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
          <FaLinkedin style={StyleIconLinkedin} />
        </a>

        <a href="https://github.com/yehooda">
          <FaGithubSquare style={StyleIconGit} />
        </a>

        <a href="https://www.facebook.com/yehooda">
          <FaFacebookSquare style={StyleIconFacebook} />
        </a>
      </div>
    </MainFooter>
  );
}
export default Footer;
