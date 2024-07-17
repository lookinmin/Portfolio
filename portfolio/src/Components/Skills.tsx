import React from "react";
import { RiToolsFill } from "react-icons/ri";
import styled from "styled-components";
import { IoFlagSharp } from "react-icons/io5";

export const Skills = () => {
  return (
    <Wrapper id="skills">
      <div>
        <RiToolsFill size={30} color="#c7e5ff" />
        <p>SKILLS</p>
      </div>

      <TxtDiv>
        <div className="fe">
          <div className="flag">
            <p>Front-End</p>
            <IoFlagSharp color="#98cfff" size={22} />
          </div>

          <li>
            <span className="sk">React</span> Framework를 능숙하게 다루며
            <span className="sk">JavaScript</span>,{" "}
            <span className="sk">TypeScript</span>를 환경에 맞추어 선택해
            사용합니다.
          </li>
          <li>
            <span className="sk">useState, useReducer</span>같은 상태 관리
            Hooks를 자유로이 사용하며,{" "}
            <span className="sk">useMemo, useEffect</span> 등의 렌더링 관련
            Hooks 또한 무리 없이 사용합니다.
          </li>
          <li>
            <span className="nk">Props drilling</span> 등의 문제에서 벗어나기
            위해 <span className="sk">Redux, Recoil</span> 상태관리 라이브러리를
            지속적으로 도입해왔습니다.
          </li>
          <li>
            React 내에서 <span className="sk">React-responsive</span>와{" "}
            <span className="sk">MediaQuery</span>를 통해 반응형 UI를 설계하고
            구축할 수 있습니다.
          </li>
          <li>
            REST API의 구조를 인지하고 있으며 비동기 통신을 위해{" "}
            <span className="sk">Axios, React-query, Redux-thunk</span>를
            자유로이 사용합니다.
          </li>
          <li>
            <span className="sk">Bootstrap</span>,{" "}
            <span className="sk">Mui</span>와 같은 오픈소스를 적극적으로
            활용하고, 단순한 차용보단 기반 디자인에 맞춘 커스텀을 지향합니다.
          </li>
          <li>
            UI/UX 기획 및 설계 단계에서 적극적으로 참여하고,{" "}
            <span className="sk">flex, grid</span> display를 통한 layout 구성에
            능합니다.
          </li>
          <li>
            크로스 브라우징 이슈에 민감하게 대응하고, 웹 표준과 웹 접근성을
            고려한 설계와 시맨틱 마크업을 고려합니다.
          </li>
          <li>
            현재는 <span className="sk">PWA</span>를 관심있게 지켜보고 있으며,{" "}
            <span className="sk">웹 성능 최적화</span>와{" "}
            <span className="sk">Webpack</span>를 공부하고 있습니다.
          </li>
        </div>

        <div className="ba">
          <div className="flag">
            <p>Back-End & Database</p>
            <IoFlagSharp color="#98cfff" size={22} />
          </div>
          <li>
            REST 원칙을 이해하고, REST API와 RESTful API를 설계할 수 있습니다.
          </li>
          <li>
            Python 기반의 <span className="sk">FastAPI</span> Framework을 통해
            웹 서버를 구축할 수 있습니다.
          </li>
          <li>
            <span className="sk">Express</span> 기반의 간단한 웹 서버를 구축할
            수 있습니다.
          </li>
          <li>
            RDBMS의<span className="sk"> MySQL</span> 쿼리를 자유롭게 작성할 수
            있으며, <span className="sk">INDEX, VIEW</span> 등의 기술에 대한
            이해를 갖추고 있습니다.
          </li>
          <li>
            <span className="sk">MongoDB, Firebase</span> 를 통한 NoSQL DB
            경험과 서비스 개발 경험이 있습니다.
          </li>
        </div>

        <div className="etc">
          <div className="flag">
            <p>ETC</p>
            <IoFlagSharp color="#98cfff" size={22} />
          </div>

          <li>
            C언어와 C++ 의 언어 구조를 인지하고, 강사로서 교육한 경험이
            있습니다.
          </li>
          <li>
            <span className="sk">Flutter</span>를 통한 Cross-Platform
            Application 개발에 능하고, 서비스 배포 경험이 있습니다.
          </li>
          <li>
            <span className="sk">Android Studio</span> 기반 Native Application
            개발 및 서비스 배포 경험이 있습니다.
          </li>
          <li>
          <span className="sk">Agile 방법론</span>에 대해 깊이 이해하고 있으며, <span className="sk">Jira</span>를 통해 이를
            프로젝트에 도입하는 것을 지향합니다.
          </li>
          <li>
          <span className="sk">Git-flow</span> / GitHub-flow 브랜치 전략을 이해하고, 도입해왔습니다.
          </li>
          <li>
            UI/UX 기획 설계 단계에 참여하고, Figma를 간단히 다룰 수 있습니다.
          </li>
        </div>
      </TxtDiv>

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
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/Node JS.png"
            alt="cpp"
            width="120px"
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
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/vercel.png"
            alt="flutter"
            width="130px"
          />

          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/flutter.png"
            alt="flutter"
            width="130px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/dart.png"
            alt="dart"
            width="110px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/Android Studio.png"
            alt="as"
            width="90px"
          />

          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/jira.png"
            alt="cpp"
            width="120px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/github.png"
            alt="cpp"
            width="80px"
          />
          <img
            src="https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/skills/figma.png"
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

const TxtDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  justify-content: center;
  width: clamp(550px, 100%, 1140px);
  gap: 2vh;
  margin: 3vh 0;

  @media (max-width: 1100px) {
    padding-left: 0.5vw;
    width: 95%;
  }

  & > div {
    display: flex;
    flex-flow: column nowrap;
    & > .flag {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px !important;
      & > p:nth-child(1) {
        font-size: 1.4rem;
        color: #98cfff;
      }
    }

    & > li {
      line-height: 1.8em;
      font-size: 0.95em;
      list-style-position: inside;
      list-style-type: circle;
      & > .sk {
        color: #d2ff98;
      }
      & > .nk {
        color: #ffa498;
      }
    }
  }
`;

const ParentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  max-width: 1100px;
  gap: 2rem;
  justify-content: center;
  padding: 2vh 2vw;

  @media (max-width: 1100px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 2vh;
    width: 85%;
  }

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
    background-color: #b8e4ab;
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
    grid-row: 3/6;

    border-radius: 20px;
    background-color: #9acbcc;
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
