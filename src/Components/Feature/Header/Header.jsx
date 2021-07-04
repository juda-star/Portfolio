import styled from "styled-components";

const HeaderLink = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;

  img {
    border: 2px solid black;
    border-radius: 20%;
    height: 40px;
  }
  p {
  }
`;

function Header() {
  return (
    <HeaderLink>
      <p>
        <a href="https://tech-career-alternative.firebaseapp.com/">
          <img src="Tech-career.jpeg" width="100" height="80px" />
        </a>
          <img src="indi.jpeg" width="100" height="80px" />
        
      </p>
      <p style={{ marginTop: "20px" }}> Email: juda.ishta@gmail.com</p>
    </HeaderLink>
  );
}
export default Header;
