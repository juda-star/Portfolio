import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 100vw;
  height: 40px; */
`;

const StyleIconLinkedin = { color: "#0A66C2" };

const StyleIconGit = { color: "#161B22" };

const StyleIconFacebook = { color: "#1877F2" };

function Footer() {
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
