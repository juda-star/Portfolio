import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSkillBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 80px;
`;

const TopSkillBar = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

const TopSkillBarName = styled.div`
  font-weight: 800;
`;

const SkillBarLine = styled.div`
  width: 100%;
  height: 10px;
  background: lightgray;
  border-radius: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

function UseEffectForSkiil(props) {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    setLineWidth(props.skillLevel);
  }, []);

  return (
    <StyledSkillBar>
      <TopSkillBar>
        <TopSkillBarName>{props.skillName}</TopSkillBarName>
        <div>{props.skillLevel}%</div>
      </TopSkillBar>
      <SkillBarLine>
        <div
          style={{
            width: `${lineWidth}%`,
            height: "100%",
            background: `#3648ff`,
            borderRadius: "16px",
            transition: "7s all",
          }}
        ></div>
      </SkillBarLine>
    </StyledSkillBar>
  );
}

export default UseEffectForSkiil;
