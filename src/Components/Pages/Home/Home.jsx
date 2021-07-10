import React from "react";
import styled from "styled-components";

export const MainPage = styled.div`
  /* overflow: scroll; */
  width: 100vw;
  height: 80vh;
  position: relative;
  background-image: url("theBadest.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  a {
    color: black;
  }
  img {
    width: 40%;
    height: 40%;
    border-radius: 10px;
    margin-right: 60%;
  }
  h4 {
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
      1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    margin-right: 60%;
  }
`;

const Darken = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0.6;
`;

const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
      1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  }
  span {
    font-weight: 400;
    opacity: 0.5;
  }
  h5 {
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
      1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  }
`;

const MainPageDetails = styled.div`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const Button = styled.div`
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid white;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 1px;
  transition: all 0.5s;
  border-radius: 16px;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background-color: white;
    color: #000;
  }
`;

export default function Home() {
  return (
    <MainPage>
      <Darken></Darken>
      <MainBody>
        <h1>
          <span> I AM</span>Yehooda Ishta
        </h1>

        <MainPageDetails>
          <h5>Petah-Tikva | 0506648599 | juda.ishta@gmail.com</h5>
        </MainPageDetails>
        <a href="https://workupload.com/file/RtTUGZXbt4A">
          <Button>Download cv</Button>
        </a>
        <img src="useReducer.jpeg" alt="" />
        <h4>
          useReducer is react Hook which is basically an alternative to
          useState. <br /> allows us more manipulations on the state.
        </h4>
      </MainBody>
    </MainPage>
  );
}

export function HomeHebrew() {
  return (
    <MainPage>
      <Darken></Darken>
      <MainBody>
        <h1>
          <span> אני</span>יהודה אישטה
        </h1>

        <MainPageDetails>
          <h5>פתח תקווה | 0506648599 | juda.ishta@gmail.com</h5>
        </MainPageDetails>
        <Button>ק"ח להורדה</Button>
        <img src="useReducer.jpeg" alt="" />
        <h4>
          useReducer - useState הוא הוק שהיא בעצם חלופה ל. <br /> .state מאפשר
          לנו יותר מניפולציות על
        </h4>
      </MainBody>
    </MainPage>
  );
}
