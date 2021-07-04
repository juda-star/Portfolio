import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const MainFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;

function Footer() {
  return (
    <MainFooter>
      <div>
        <h2>
          <a href="https://github.com/yehooda">
            <FaGithubSquare />
          </a>
          <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/yehooda">
            <FaFacebookSquare />
          </a>
        </h2>
      </div>
    </MainFooter>
  );
}
export default Footer;
