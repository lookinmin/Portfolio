import React from "react";
import styled from "styled-components";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoSchool, IoPerson, IoPeopleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiMedalMilitaryFill } from "react-icons/pi";
import { TbAwardFilled } from "react-icons/tb";
import { BsFillAwardFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { univState } from "../atoms/blind";

export const About = () => {
  const univ = useRecoilValue(univState);

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clickHandler = (e: number) => {
    switch (e) {
      case 1:
      case 2:
      case 4:
        window.open("https://github.com/PDA-PRO/.github");
        break;
      case 3:
        window.open("https://github.com/OFFSIDE-PDA/OFFSIDE");
        break;
      case 5:
        window.open("https://github.com/lookinmin/P.I.Shield");
        break;
      case 6:
        window.open("https://github.com/lookinmin/Fing");
        break;
      case 7:
        window.open("https://github.com/lookinmin/KoreanTime");
        break;
    }
  };

  return (
    <Aboutdiv id="about">
      <div>
        <HiOutlineInformationCircle size={33} color="#c7e5ff" />
        <p>ABOUT ME</p>
      </div>

      <GridContainer>
        <Wrapper>
          <ShowText>
            <div className="un">
              <IoPerson size={23} color="#bf7fe4" />
              <p>ME</p>
            </div>

            <p>조민수, Min-Su CHO</p>
          </ShowText>

          <ShowText>
            <div className="un">
              <MdEmail size={23} color="#d5e47f" />
              <p>Email</p>
            </div>

            <p>ancx1234@naver.com</p>
          </ShowText>

          <ShowText>
            <div className="un">
              <IoSchool size={23} color="#7fa2e4" />
              <p>학력</p>
            </div>

            <p>{univ} 소프트웨어학과 졸업</p>
          </ShowText>

          <ShowText>
            <div className="un">
              <PiMedalMilitaryFill size={23} color="#6caf4d" />
              <p>병역</p>
            </div>

            <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
              육군 병장 만기제대
              <br />
              <span style={{ fontSize: "0.9em", color: "#aaaaaa" }}>
                (19.07 - 21.02)
              </span>
            </p>
          </ShowText>

          <ShowText>
            <div className="un">
              <IoPeopleSharp size={23} color="skyblue" />
              <p>대내외 활동</p>
            </div>

            <div className="list">
              <li>{univ} 전자정보대학 제 22대 SUMMIT 학생회 복지국장</li>
              <p className="subText">2023.01.01 ~ 2023.12.31</p>
              <li>학과 동아리 PDA-PRO 학습부장</li>
              <p className="subText">2022.01.01 ~ 2023.12.31</p>
              <li>{univ} SW중심사업단 학부생 튜터</li>
              <p className="subText">2022.09.01 ~ 2023.07.01</p>
              <li>{univ} 전자정보대학 제 21대 EQUALITY 학생회 정책기획국장</li>
              <p className="subText">2022.01.01 ~ 2022.12.31</p>
              <li>학과 동아리 CGAC 사무차장</li>
              <p className="subText">2019.01.01 ~ 2019.07.22</p>
            </div>
          </ShowText>
        </Wrapper>

        <Wrapper>
          <ShowText>
            <div className="un">
              <BsFillAwardFill size={23} color="lightgray" />
              <p>자격증, 어학</p>
            </div>
            <div className="list">
              <li>OPIc IH</li>
              <p className="subText">2024.05.07</p>
              <li>정보처리기사</li>
              <p className="subText">2023.11.15</p>
            </div>
          </ShowText>

          <ShowText>
            <div className="un">
              <TbAwardFilled size={23} color="gold" />
              <p style={{ textAlign: "center", lineHeight: "1.4em" }}>
                수상 경력
                <br />
                <span style={{ fontSize: "0.8em" }}>(상세 보기 클릭)</span>
              </p>
            </div>
            <div className="listup">
              <li onClick={() => clickHandler(1)}>
                2023 오픈소스SW 동아리 최우수상
              </li>
              <p className="subText">2023.12.08 / {univ} SW중심사업단</p>
              <li onClick={() => clickHandler(2)}>
                2023 공개SW 개발자대회 동상 - (주)비아웹 대표상
              </li>
              <p className="subText">2023.12.01 / 과학기술정보통신부</p>
              <li onClick={() => clickHandler(3)}>
                2023 관광데이터 활용 공모전 우수상
              </li>
              <p className="subText">2023.11.29 / 한국관광공사</p>
              <li onClick={() => clickHandler(4)}>
                2023 {univ} 전자정보대학 캡스톤 디자인 대상
              </li>
              <p className="subText">2023.11.03 / {univ} 전자정보대학</p>
              <li onClick={() => clickHandler(5)}>
                2022 충청권 ICT 메이커톤 우수상
              </li>
              <p className="subText">2022.11.05 / 과학기술정보통신부</p>
              <li onClick={() => clickHandler(6)}>
                2022 관광데이터 활용 공모전 장려상
              </li>
              <p className="subText">2022.10.06 / 한국관광공사, Kakao</p>
              <li onClick={() => clickHandler(7)}>
                2022 오픈소스전문프로젝트 교과기반 프로젝트 우수상
              </li>
              <p className="subText">2022.06.30 / {univ} SW중심사업단</p>
            </div>
          </ShowText>
        </Wrapper>
      </GridContainer>

      <p id="more" onClick={scrollToFooter}>
        MORE
        <br />
        <span>(GitHub, velog)</span>
      </p>
    </Aboutdiv>
  );
};

const Aboutdiv = styled.div`
  width: 100%;
  background-color: #505050;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 3rem 0;

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
  }

  & > #more {
    font-size: 1.1em;
    cursor: pointer;
    margin-top: 3vh !important;
    text-align: center;
    &:hover {
      color: #a8d7ff;
      font-weight: 700;
    }
    & > span {
      color: #b8b8b8;
      font-size: 0.9em;
    }
    @media (max-width: 1100px) {
      margin-top: 5vh !important;
    }
  }
`;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2vw;
  margin-top: 2vh;

  &::after {
    content: "";
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #757575;
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column nowrap;

    &::after {
      content: none;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  gap: 4vh;
  margin: 7vh 0 6vh 0;

  @media (max-width: 1100px) {
    margin: 5vh 0 0 0;
  }
`;

const ShowText = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 6fr;
  justify-items: start;
  align-items: center;
  width: clamp(500px, 100%, 750px);

  & > .un {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    justify-self: center;
    gap: 8px;
    & > p {
      font-size: 0.9em;
      color: #aaaaaa;
    }
  }

  & > .listup {
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: center;

    & > li:nth-child(1) {
      padding: 0 0 0.5em 0;
    }

    & > li {
      padding: 0.5em 0;
      cursor: pointer;
      &:hover {
        color: skyblue;
      }
    }

    & > .subText {
      padding-left: 22px;
      color: #aaaaaa;
      font-size: 0.9em;
    }
  }

  & > .list {
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: center;

    & > li:nth-child(1) {
      padding: 0 0 0.5em 0;
    }

    & > li {
      padding: 0.5em 0;
    }

    & > .subText {
      padding-left: 22px;
      color: #aaaaaa;
      font-size: 0.9em;
    }
  }
`;
