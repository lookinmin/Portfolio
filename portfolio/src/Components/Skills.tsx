import React from "react";
import { RiToolsFill } from "react-icons/ri";
import styled from "styled-components";

export const Skills = () => {
  return (
    <Wrapper id="skills">
      <div>
        <RiToolsFill size={30} color="#c7e5ff" />
        <p>SKILLS</p>
      </div>

      <ParentDiv>
        <div className="front">
          <p className="skill_title">for Front-End dev.</p>
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/js.png"
            alt="react"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/ts.png"
            alt="react"
            width="71px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/react.png"
            alt="react"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/html.png"
            alt="react"
            width="80px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/css.png"
            alt="react"
            width="57px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/jquery.png"
            alt="react"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/mui.png"
            alt="react"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/bootstrap.png"
            alt="react"
            width="80px"
          />

          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/redux.png"
            alt="react"
            width="80px"
          />

          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/recoil.png"
            alt="react"
            width="150px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/reactquery.png"
            alt="react"
            width="140px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/styled-components.png"
            alt="react"
            width="100px"
          />
        </div>

        <div className="back">
          <p className="skill_title">for Full-Stack dev.</p>
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/python.png"
            alt="react"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/fastapi.png"
            alt="cpp"
            width="160px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/flutter.png"
            alt="react"
            width="130px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/mysql.png"
            alt="cpp"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/mongo.png"
            alt="cpp"
            width="80px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/firebase.png"
            alt="cpp"
            width="160px"
          />
        </div>

        <div className="etc">
          <p className="skill_title">ETC</p>
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/c.png"
            alt="c"
            width="82px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/cpp.png"
            alt="cpp"
            width="70px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/figma.png"
            alt="cpp"
            width="80px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/jira.png"
            alt="cpp"
            width="130px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/github.png"
            alt="cpp"
            width="80px"
          />
        </div>
      </ParentDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5vh 0;
  & > div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    & > p {
      font-family: "WavvePADO-Regular";
      font-size: 1.8rem;
      font-weight: 500;
      color: #c7e5ff;
    }
    margin-bottom: 3vh;
  }
`;

const ParentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;
  padding: 2vh 2vw;

  & > .front {
    grid-column: 1/5;
    grid-row: 1/3;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 3vh;

    & > .skill_title {
      grid-column: 1/7;
      font-size: 1.8em;
      font-weight: 600;
      color: #2b2b2b;
      font-family: "WavvePADO-Regular";
    }

    border-radius: 20px;
    background-color: #8b8b8b;
    padding: 2rem;
  }

  & > .back {
    grid-column: 1/3;
    grid-row: 3/5;
    border-radius: 20px;
    background-color: #a3d494;
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 3vh;

    & > .skill_title {
      grid-column: 1/4;
      font-size: 1.5em;
      font-weight: 600;
      color: green;
      font-family: "WavvePADO-Regular";
    }
  }

  & > .etc {
    grid-column: 3/5;
    grid-row: 3/5;

    border-radius: 20px;
    background-color: #8ebdbe;
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 3vh;

    & > .skill_title {
      grid-column: 1/4;
      font-size: 1.5em;
      font-weight: 600;
      color: navy;
      font-family: "WavvePADO-Regular";
    }
  }
`;
