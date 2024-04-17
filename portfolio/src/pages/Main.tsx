import React, { useEffect } from "react";
import styled from "styled-components";
import { About } from "../Components/About";
import { Career } from "../Components/Career";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import Swal from "sweetalert2";
import { univState } from "../atoms/blind";
import { useRecoilState } from "recoil";

export const Main = () => {
  const [univ, setUniv] = useRecoilState(univState);

  useEffect(() => {
    Swal.fire({
      title: "WELCOME",
      text: "방문해주셔서 감사합니다. 블라인드 채용 담당자이신가요?",
      icon: "question",
      allowEscapeKey: false,
      showDenyButton: true,
      confirmButtonText: "네",
      denyButtonText: "아니오",
    }).then((res) => {
      if (res.isConfirmed) {
        setUniv("00대학교");
      }
    });
  }, [setUniv]);

  return (
    <StyledBody>
      <InnerBody id="main">
        <p style={{ textAlign: "center", lineHeight: "3.3em" }}>
          <span style={{ fontSize: "1.7em", color: "skyblue" }} id="welcome">
            WELCOME
          </span>
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
    & > #welcome {
      animation: tracking-in-contract 1.5s cubic-bezier(0.215, 0.61, 0.355, 1)
        1s both;
    }
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
      animation: slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
    }

    & > img:nth-child(2) {
      position: relative;
      margin-top: 120px;
      border-radius: 15px;
      z-index: 2;
      animation: slide-in-bottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
        both;
    }

    & > img:nth-child(3) {
      position: relative;
      margin-top: 50px;
      border-radius: 15px;
      left: -35%;
      z-index: 1;
      animation: slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
        both;
    }
  }
`;
