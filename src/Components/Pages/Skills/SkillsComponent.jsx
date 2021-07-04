import React from "react";
import styled from "styled-components";
const styledSkillsBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 300px;
  max-width: 500px;
`;
const TopSkillsBar = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
`;
const SkillsBarLine = styled.div`
  width: 100%;
  height: 10px;
  background-color: lightgray;
  border-radius: 16px;
  margin-top: 8px;
`;
const TopSkillsName = styled.div`
  font-weight: 800;
`;

export default function SkillsComponent(props) {
  const SkillsBarMidLine = styled.div`
    width: ${props.skillLevel}%;
    height: 100%;
    background-color: rgb(54, 72, 255);
    margin-top: 8px;
    border-radius: 16px;
  `;

  return (
    <styledSkillsBar>
      <TopSkillsBar>
        <TopSkillsName>{props.skillName}</TopSkillsName>
        <div>{props.skillLevel}%</div>
      </TopSkillsBar>
      <SkillsBarLine>
        <SkillsBarMidLine></SkillsBarMidLine>
      </SkillsBarLine>
    </styledSkillsBar>
  );
}
