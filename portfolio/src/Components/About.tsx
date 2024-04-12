import React from "react";
import styled from "styled-components";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoSchool, IoCall, IoPerson, IoPeopleSharp } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { PiMedalMilitaryFill } from "react-icons/pi";
import { TbAwardFilled } from "react-icons/tb";

export const About = () => {
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
    <Aboutdiv>
      <div>
        <HiOutlineInformationCircle size={33} color="#c7e5ff" />
        <p>ABOUT ME</p>
      </div>
      <DisplayGrid>
        <div>
          <div className="un">
            <IoPerson size={23} />
            <p>ME</p>
          </div>

          <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
            조민수, Min-Su Jo
            <br />
            <span style={{ fontSize: "0.9em", color: "#aaaaaa" }}>
              (99.04.18)
            </span>
          </p>
        </div>

        <div>
          <div className="un">
            <IoCall size={23} />
            <p>Tel</p>
          </div>

          <p>010-5826-2205</p>
        </div>

        <div>
          <div className="un">
            <MdEmail size={23} />
            <p>Email</p>
          </div>

          <p>ancx1234@naver.com</p>
        </div>

        <div>
          <div className="un">
            <IoSchool size={23} />
            <p>학력</p>
          </div>

          <p>충북대학교 소프트웨어학과 졸업</p>
        </div>

        <div>
          <div className="un">
            <MdLocationOn size={23} />
            <p>Location</p>
          </div>

          <p>경기 오산시 외삼미로 91번길 46</p>
        </div>

        <div>
          <div className="un">
            <PiMedalMilitaryFill size={23} />
            <p>병역</p>
          </div>

          <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
            육군 병장 만기제대
            <br />
            <span style={{ fontSize: "0.9em", color: "#aaaaaa" }}>
              (19.07 - 21.02)
            </span>
          </p>
        </div>
      </DisplayGrid>

      <AwardsGrid>
        <div>
          <div>
            <div>
              <TbAwardFilled size={24} color="gold" />
              <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
                Certificate
                <br />
                Awards
              </p>
            </div>
            <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
              자격증
              <br />
              수상 경력
              <br />
              <span style={{ fontSize: "0.8em", color: "#aaaaaa" }}>
                (상세 정보 클릭)
              </span>
            </p>
          </div>

          <div className="listup">
            <li>정보처리기사</li>
            <p className="subText">2023.11.15</p>
            <li onClick={() => clickHandler(1)}>
              2023 오픈소스SW 동아리 최우수상
            </li>
            <p className="subText">2023.12.08 / 충북대학교 SW중심사업단</p>
            <li onClick={() => clickHandler(2)}>
              2023 공개SW 개발자대회 동상 - (주)비아웹 대표상
            </li>
            <p className="subText">2023.12.01 / 과학기술정보통신부</p>
            <li onClick={() => clickHandler(3)}>
              2023 관광데이터 활용 공모전 우수상
            </li>
            <p className="subText">2023.11.29 / 한국관광공사</p>
            <li onClick={() => clickHandler(4)}>
              2023 충북대학교 전자정보대학 캡스톤 디자인 대상
            </li>
            <p className="subText">2023.11.03 / 충북대학교 전자정보대학</p>
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
            <p className="subText">2022.06.30 / 충북대학교 SW중심사업단</p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <IoPeopleSharp size={24} color="skyblue" />
              <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
                Activities
              </p>
            </div>
            <p style={{ textAlign: "center", lineHeight: "1.5em" }}>
              대내외 활동
              <br />
              <span style={{ fontSize: "0.8em", color: "#aaaaaa" }}>
                (동아리, 학생회 등)
              </span>
            </p>
          </div>

          <div className="listup2">
            <li>충북대학교 전자정보대학 제 22대 SUMMIT 학생회 복지국장</li>
            <p className="subText">2023.01.01 ~ 2023.12.31</p>
            <li>학과 동아리 PDA-PRO 학습부장</li>
            <p className="subText">2022.01.01 ~ 2023.12.31</p>
            <li>SW중심사업단 학부생 튜터</li>
            <p className="subText">2022.09.01 ~ 2023.07.01</p>
            <li>
              충북대학교 전자정보대학 제 21대 EQUALITY 학생회 정책기획국장
            </li>
            <p className="subText">2022.01.01 ~ 2022.12.31</p>
            <li>학과 동아리 CGAC 사무차장</li>
            <p className="subText">2019.01.01 ~ 2019.07.22</p>
          </div>
        </div>
      </AwardsGrid>
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
`;

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 7vh 0 6vh 0;
  column-gap: 2rem;
  row-gap: 6vh;
  width: 80%;
  justify-items: center;
  & > div > .un {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    & > p {
      font-size: 0.9em;
      color: #aaaaaa;
    }
  }
  & > div {
    display: flex;
    flex-flow: row nowrap;
    gap: 2vw;
    align-items: center;
  }
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2vw;
  width: 80%;
  justify-items: center;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    gap: 2vw;

    & > .listup {
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      justify-content: center;

      & > li:nth-child(1) {
        padding: 0 0 0.5em 0;
      }

      & > li:not(:first-child) {
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

    & > .listup2 {
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      justify-content: center;

      & > li {
        padding: 0.5em 0;
      }

      & > .subText {
        padding-left: 22px;
        color: #aaaaaa;
        font-size: 0.9em;
      }
    }

    & > div:nth-child(1) {
      display: flex;
      flex-flow: row nowrap;
      gap: 1vw;
      align-items: center;
      margin-bottom: 1rem;

      & > div {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        & > p {
          font-size: 0.9em;
          color: #aaaaaa;
        }
      }
    }
  }
`;
