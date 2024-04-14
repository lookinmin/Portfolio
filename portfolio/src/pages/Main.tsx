import React from "react";
import styled from "styled-components";
import { About } from "../Components/About";
import { Career } from "../Components/Career";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";

export const Main = () => {
  return (
    <StyledBody>
      <InnerBody id="main">
        <p style={{ textAlign: "center", lineHeight: "3.3em" }}>
          <span style={{ fontSize: "1.7em", color: "skyblue" }}>WELCOME</span>
          <br />
          Front-End & Full-Stack Developer
        </p>
        <p>
          lookin_min, <span style={{ color: "skyblue" }}>조민수</span>입니다.
        </p>
        <p style={{ textAlign: "center", lineHeight: "1.6em" }}>
          안주하지 않으며 발전 방향을 찾고,
          <br />
          사용자에게 최고의 경험을 선사하는 것을 목표로 하고있습니다.
        </p>

        <div className="imgGrid">
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/me.jpg"
            alt="내 사진1"
            height="400px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/me2.jpg"
            alt="내 사진2"
            height="400px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/me3.jpg"
            alt="내 사진3"
            height="400px"
          />
        </div>
      </InnerBody>

      <About />

      <Skills />

      <Career />

      <Projects />
    </StyledBody>
  );
};

const StyledBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const InnerBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  align-items: center;
  justify-content: start;
  padding: 4rem 0;
  & > p:nth-child(1) {
    font-family: "WavvePADO-Regular";
    font-size: 2rem;
    font-weight: 500;
    color: #c7e5ff;
  }

  & > p:nth-child(2) {
    font-size: 1.3rem;
  }
  & > p:nth-child(3) {
    font-size: 1rem;
  }

  & > .imgGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5vh;
    justify-items: center;

    & > img:nth-child(1) {
      position: relative;
      border-radius: 15px;
      left: 40%;
      z-index: 1;
    }

    & > img:nth-child(2) {
      position: relative;
      margin-top: 120px;
      border-radius: 15px;
      z-index: 2;
    }

    & > img:nth-child(3) {
      position: relative;
      margin-top: 50px;
      border-radius: 15px;
      left: -35%;
      z-index: 1;
    }
  }
`;
