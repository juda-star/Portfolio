import styled from "styled-components";
import Link from "../Link/Link";
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
  const LinkArray=[
    "https://tech-career-alternative.firebaseapp.com/",
    "Tech-career.jpeg",
    "indi.jpeg"
];
  return (
    <HeaderLink>
      <p>
        
        <Link LinkArray={LinkArray} />
        
      </p>
      <p style={{ marginTop: "20px" }}> Email: juda.ishta@gmail.com</p>
    </HeaderLink>
  );
  }
export default Header;
