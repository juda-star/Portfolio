import styled from "styled-components";
import { MainPage } from "../Home/Home";
import PropsImg from "./PropsImg";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const StyledMainPage = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-size: cover;
  position: relative;
`;

const MainPageBody = styled.div`
  width: 100%;
  height: calc(100vh - 173.6px);
  position: absolute;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
  }
`;

const StyledProjects = styled.div`
  display: flex;
  > div {
    margin: 0 16px;
  }
`;

export default function PortFolio() {
  return (
    <MainPage>
      <StyledMainPage>
        <MainPageBody>
          <h1>My Github Projects</h1>
          <br />
          <h3>https://github.com/juda-star</h3> <br /> <br />
          <StyledProjects>
            <PropsImg name="my_resume" image="juda.jpeg" />
            <a href="https://github.com/juda-star/new_project">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>Github</p>
            <PropsImg
              name="calculator"
              image="https://www.channelfutures.com/files/2015/06/burden-calculator-1.jpg"
            />
            <a href="https://github.com/juda-star/calculator1">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>Github</p>
            <PropsImg name="holidayMission" image="Untitled.png" />
            <a href="https://github.com/juda-star/holidayMission">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>Github</p>
            <PropsImg
              name="MovieApp"
              image="https://cdn.vox-cdn.com/thumbor/Yi-UaHGh_i7mC9gteWnrK-JlP5g=/0x0:2238x1350/1200x800/filters:focal(940x496:1298x854)/cdn.vox-cdn.com/uploads/chorus_image/image/66013482/Screen_Shot_2019_11_12_at_7.27.13_AM.0.png"
            />
            <a href="https://github.com/juda-star/MoviesApp">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>Github</p>
          </StyledProjects>
        </MainPageBody>
      </StyledMainPage>
    </MainPage>
  );
}

export function PortFolioHebrew() {
  return (
    <MainPage>
      <StyledMainPage>
        <MainPageBody>
          <h1>עמוד הגיט</h1>
          <br />
          <h3>https://github.com/juda-star</h3> <br /> <br />
          <StyledProjects>
            <PropsImg name="קורות חיים" image="juda.jpeg" />
            <a href="https://github.com/juda-star/new_project">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>גיט</p>
            <PropsImg
              name="מחשבון"
              image="https://www.channelfutures.com/files/2015/06/burden-calculator-1.jpg"
            />
            <a href="https://github.com/juda-star/calculator1">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>גיט</p>
            <PropsImg name="משימת חג" image="Untitled.png" />
            <a href="https://github.com/juda-star/holidayMission">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>גיט</p>
            <PropsImg
              name="אפליקצית סרטים"
              image="https://cdn.vox-cdn.com/thumbor/Yi-UaHGh_i7mC9gteWnrK-JlP5g=/0x0:2238x1350/1200x800/filters:focal(940x496:1298x854)/cdn.vox-cdn.com/uploads/chorus_image/image/66013482/Screen_Shot_2019_11_12_at_7.27.13_AM.0.png"
            />
            <a href="https://github.com/juda-star/MoviesApp">
              <FaGithubSquare fontSize="xx-large" style={{ color: "white" }} />
            </a>
            <p>גיט</p>
          </StyledProjects>
        </MainPageBody>
      </StyledMainPage>
    </MainPage>
  );
}
