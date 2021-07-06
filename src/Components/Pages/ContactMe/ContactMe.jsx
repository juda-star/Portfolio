import styled from "styled-components";
import { MainPage } from "../Home/Home";
import Input from "../../Feature/Input/Input";
const StyledMainPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width: 100%;
  height: 100%;
  background: url("https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  button {
    width: 99%;
    background-color: #ccc;
    color: white;
    padding: 14px 20px;
    margin: 8px 6px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input {
    width: 99%;
    padding: 12px 20px;
    margin: 8px 6px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const MainPageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 8px 8px;
  margin: 8px ;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export default function ContactMe() {
  return (
    <MainPage>
      <StyledMainPage>
        <MainPageBody>
          <Input />
        </MainPageBody>
      </StyledMainPage>
    </MainPage>
  );
}



export function ContactMeHebrew() {
  return (
    <MainPage>
      <StyledMainPage>
        <MainPageBody>
          <Input />
        </MainPageBody>
      </StyledMainPage>
    </MainPage>
  );
}




