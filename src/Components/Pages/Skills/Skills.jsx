import React from "react";
import styled from "styled-components";
import UseEffectForSkiil from "../../Feature/UseEffectForSkiil/UseEffectForSkiil";
import { FaJs, FaReact } from "react-icons/fa";
const StyledAboutMe = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;

  h2 {
    font-size: 30px;
  }
`;

const AboutMePic = styled.div`
  padding: 8px;
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    border-radius: 32px;
    border: 4px solid gray;
  }
`;

const AboutMeSkills = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  span {
    display: inline-block;
  }
  h3 {
    color: #3648ff;
  }
  p {
    color: #3648ff;
    width: 75%;
    text-align: left;
  }
`;

const AboutMeBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function Skills() {
  return (
    <StyledAboutMe>
      <AboutMeBody>
        <AboutMePic>
          <img src="juda.jpeg" alt="" />
        </AboutMePic>
        <AboutMeSkills>
          <span>hello & Welcome </span>
          <h3>I'M YEHOODA ISHTA.</h3>
          <h3>
            • Fullstuck Developer. Believes in hard work. <br />• Professional
            skills: Teamwork abilities.
            <br />• personal skills: leadership ,creativity,patience.
          </h3>
          <br />
          <span>UI/UX Designer • Photographer • Devloper</span>
          <p>
            Tech-Career Technology Training Center, 800 Hours Development
            Programming Course - Applications and Web.
          </p>
          <br />
          <h3>Client side:</h3>
          <UseEffectForSkiil
            skillName={
              <FaReact fontSize="x-large" style={{ color: "black" }} />
            }
            skillLevel={75}
          />

         

          <h3>Server side:</h3>
          <UseEffectForSkiil
            skillName={<FaJs fontSize="x-large" style={{ color: "black" }} />}
            skillLevel={82}
          />

          

        </AboutMeSkills>
      </AboutMeBody>
    </StyledAboutMe>
  );
}

export function SkillsHebrew() {
  return (
    <StyledAboutMe>
      <AboutMeBody>
        <AboutMePic>
          <img src="juda.jpeg" alt="" />
        </AboutMePic>
        <AboutMeSkills>
          <span>שלום & ברוכים הבאים </span>
          <h3>אני יהודה אישטה.</h3>
          <h3>
            • מפתח - Fullstuck. מאמין בעבודה קשה. <br />• יכולות: עבודת צוות.
            <br />• יכולות אישיות: הנהגה .יצירתי,סובלנות.
          </h3>
          <br />
          <span>מעצב ממשק משתמש / UX • צלם • מפתח תוכנה</span>
          <p>
            מרכז הכשרה טכנולוגית-קריירה, 800 שעות פיתוח קורס תכנות - יישומים
            ואינטרנט .
          </p>
          <br />
          <h3>צד - לקוח:</h3>
          <UseEffectForSkiil
            skillName={
              <FaReact fontSize="x-large" style={{ color: "black" }} />
            }
            skillLevel={75}
          />
         
          <h3>צד שרת:</h3>
          <UseEffectForSkiil
            skillName={<FaJs fontSize="x-large" style={{ color: "black" }} />}
            skillLevel={82}
          />
         
        </AboutMeSkills>
      </AboutMeBody>
    </StyledAboutMe>
  );
}
