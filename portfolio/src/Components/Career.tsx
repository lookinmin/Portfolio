import React from 'react';
import styled from 'styled-components';
import { FaPersonRunning } from 'react-icons/fa6';

export const Career = () => {
  return (
    <CareerParent id="career">
      <div>
        <FaPersonRunning size={30} color="#c7e5ff" />
        <p>CAREERS</p>
      </div>

      <CareerBox>
        <p>서울우유협동조합</p>
        <p>2025.02 ~</p>
        <hr />
        <p>근무형태 : 인턴</p>
        <p>소속속 : 경영정보팀</p>
        <hr />
        <p>[주 업무]</p>
        <li></li>
      </CareerBox>

      <CareerBox>
        <p>남박사로봇코딩학원 (청주)</p>
        <p>2022.07 ~ 2023.10</p>
        <hr />
        <p>근무형태 : 아르바이트</p>
        <p>직책 : 코딩 강사</p>
        <hr />
        <p>[주 업무]</p>
        <li>C, C++, Python 등 기초 프로그래밍 언어 강의</li>
        <li>코딩 올림피아드 대비 알고리즘 문제 해설 강의</li>
        <li>HTML5/CSS3/JavaScript 웹 프로그래밍 기초 강의</li>
        <li>Arduino, 3D Printing 등 기타 강의</li>
      </CareerBox>
    </CareerParent>
  );
};

const CareerParent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4vh;
  justify-content: center;
  align-items: center;
  margin: 3vh 0;
  width: 100%;
  & > div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    & > p {
      font-family: 'WavvePADO-Regular';
      font-size: 1.8rem;
      font-weight: 500;
      color: #c7e5ff;
    }
  }
  background-color: #505050;
  padding: 7vh 0;
`;

const CareerBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #262626;
  width: 60%;
  border-radius: 15px;
  padding: 2rem;
  min-height: 10vh;
  gap: 1vh;

  & > p:nth-child(1) {
    font-size: 1.3em;
  }

  & > p:nth-child(2) {
    font-size: 0.9em;
    color: #aaaaaa;
  }

  & > hr {
    width: 100%;
    background: #868686;
    height: 1px;
    border: 0;
  }

  & > li {
    padding-left: 10px;
  }
`;
