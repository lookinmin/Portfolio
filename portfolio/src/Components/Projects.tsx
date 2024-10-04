import React from 'react';
import styled from 'styled-components';
import { PiCodeBlockFill, PiBooksDuotone } from 'react-icons/pi';
import { IoLogoGithub, IoPeopleSharp, IoCheckmark } from 'react-icons/io5';
import { TbAwardFilled } from 'react-icons/tb';
import { BsQuestionLg, BsExclamationLg } from 'react-icons/bs';
import { MdOutlineLaptopChromebook } from 'react-icons/md';
import { FiLink } from 'react-icons/fi';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { univState } from '../atoms/blind';
import { Chart } from './Chart';

interface ProjectType {
  layoutType: boolean;
}

interface Project {
  name: string;
  day: string;
  isWeb: boolean;
  isAward: boolean;
  award: Array<string>;
  team: string;
  role: Array<string>;
  why: Array<string>;
  description: Array<string>;
  skills: Array<string>;
  functions: Array<string>;
  GitUrl: string;
  isOut: boolean;
  etcUrl: Array<string>;
  pictures: Array<string>;
  isVideo: boolean;
  video: string;
}

export const Projects = () => {
  const univ = useRecoilValue(univState);

  const projects: Project[] = [
    {
      name: 'YACHT DICE',
      day: '2024.08 ~ ',
      isWeb: true,
      isAward: false,
      award: [''],
      team: '1인 프로젝트',
      role: ['Full Stack', 'UI/UX'],
      why: ['보드게임 Yacht Dice를 AI를 활용한 웹/앱 게임으로'],
      description: [
        'PWA를 통한 웹/앱 서비스 개발',
        'React TS, FastAPI, MySQL의 풀스택 개발',
        '기획 → 설계 → 개발 → 배포의 시스템 전체 1인 구축',
      ],
      skills: [
        'React, TypeScript',
        'FastAPI, Python',
        'MySQL',
        '@media, Recoil, Styled-components',
        'Vercel, AWS S3',
      ],
      functions: [
        '※ 9월 현재, 로그인/회원가입, 친구추가 기능 구현 (추후 기능 지속 개발 예정)',
        '로그인, 친구추가, 게임 서비스',
        'GPT 4 API와 프롬프트 엔지니어링, RAG를 활용한 AI 대전',
        '@media를 통한 반응형 UI 및 다크모드 지원',
      ],
      GitUrl: 'https://github.com/lookinmin/YACHT_DICE',
      isOut: false,
      etcUrl: [''],
      pictures: [
        'https://yachtdice.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%EC%9D%B4%EB%AF%B8%EC%A7%80/yacht+%EC%84%A4%EA%B3%84.png',
        'https://yachtdice.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%EC%9D%B4%EB%AF%B8%EC%A7%80/yacht+figma.png',
        'https://yachtdice.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%EC%9D%B4%EB%AF%B8%EC%A7%80/yacht+%EB%A1%9C%EA%B7%B8%EC%9D%B8.png',
        'https://yachtdice.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%EC%9D%B4%EB%AF%B8%EC%A7%80/yacht+%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png',
        'https://yachtdice.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%EC%9D%B4%EB%AF%B8%EC%A7%80/yacht+%EC%B9%9C%EA%B5%AC%EC%B6%94%EA%B0%80.png',
      ],
      isVideo: false,
      video: '',
    },
    {
      name: "lookin_min's Portfolio",
      day: '2024.04',
      isWeb: true,
      isAward: false,
      award: [''],
      team: '1인 프로젝트',
      role: ['Front-End', 'UI/UX'],
      why: ['포트폴리오를 위한 웹 사이트 제작'],
      description: [
        '포트폴리오 웹사이트 구축 및 배포',
        'React TS, Styled-components를 통한 CSS-in-JS 개발',
        'Vercel을 통한 Git 연동 배포',
      ],
      skills: [
        'React',
        'TypeScript',
        'Styled-components',
        '@media, Recoil, Recharts',
        'Vercel',
        '@babel webpack',
      ],
      functions: [
        '소개용 웹 페이지',
        '방문자에 따른 정보 공개 상태 처리',
        '@media를 통한 반응형 UI',
      ],
      GitUrl: 'https://github.com/lookinmin/Portfolio',
      isOut: false,
      etcUrl: [''],
      pictures: [
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/pf/main.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/pf/about.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/pf/skills.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/pf/project.png',
      ],
      isVideo: false,
      video: '',
    },
    {
      name: 'EDU:CONNECT',
      day: '2023.11.17 ~ 2023.11.18',
      isWeb: true,
      isAward: false,
      award: [''],
      team: '3인, FE 1 + BE 2',
      role: ['Team Leader', 'Front-End', 'UI/UX', 'Prompt Engineering'],
      why: [
        'AI 기반의 온라인 LMS 웹 서비스 제작',
        '학습자와 교육자 모두 AI 기반 기능을 사용할 수 있는 AI 친화적 웹 서비스 제작',
        'TypeScript 기반 Front-End 개발, 반응형 UI 역량 함양',
      ],
      description: [
        '2023 충청권 ICT 메이커톤 본선 진출',
        '비록 수상에는 실패했지만, Figma 기반의 UI/UX 설계부터 React TS를 통한 개발 과정까지의 경험',
        'Prompt Engineering을 통한 LLM의 효율적 활용 경험',
        'GitHub-flow 브랜치 전략을 통한 전략적 협업 관리 진행',
      ],
      skills: [
        'React',
        'TypeScript',
        'Styled-components',
        'Redux, React-query, Axios, React Hooks',
        '반응형 UI - MediaQuery, React-responsive',
        'FastAPI',
        'ChatGPT API, Prompt Engineering',
        'Mui, Boostrap',
        'Figma',
      ],
      functions: [
        'Redux 기반 로그인',
        '강의실 제작 및 학습 컨텐츠 제작',
        'AI 기반 Quiz 생성, AI 기반 Q&A 시스템',
        '강의자료(.pdf) 업로드 및 저장',
        '학습자의 현 상태 피드백',
      ],
      GitUrl:
        'https://github.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end',
      isOut: false,
      etcUrl: [''],
      pictures: [
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/로그인.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/main.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/make.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/inside1.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/inside2.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/inside3.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/inside4.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/inside5.png',
        'https://raw.githubusercontent.com/CGAC-Contribution-Group-As-Code/eduConnect-front-end/main/img/inside6.png',
      ],
      isVideo: true,
      video: 'https://www.youtube.com/embed/YBh9KXaR1kM',
    },
    {
      name: 'Coding Coach : COCO',
      day: '2023.02 ~ 2023.11',
      isWeb: true,
      isAward: true,
      award: [
        '2023 오픈소스SW 동아리 최우수상',
        '2023 공개SW 개발자대회 동상',
        '2023 캡스톤 디자인 대상',
      ],
      team: '3인, FE 1 + BE 1 + DevOps 1',
      role: [
        'Team Leader',
        'Front-End',
        'UI/UX 설계',
        'Prompt Engineering',
        'Database',
      ],
      why: [
        '초보자를 위한 AI 활용 온라인 저지 웹 서비스 제작',
        '코딩 강사 경험에서 발전한 에듀테크 기반 서비스 제작',
        'React + FastAPI + MySQL 까지의 Full-stack 개발 역량 함양',
      ],
      description: [
        'Git-flow 브랜치 전략 도입, JIRA를 통한 Agile 도입으로 효율적 협업 진행',
        '요구사항 명세서, UML 다이어그램 등 문서 기반 체계적 설계 경험',
        'Prompt Engineering을 통한 생성형 AI(ChatGPT) 효과적 활용 경험',
        "기존의 '리스트뷰 Q&A' → 'Accordian 활용 기반'으로 전환 등의 리팩토링 과정 경험",
        '마이페이지 내 불필요 리렌더링 제거 및 렌더링 속도 향상을 위한 API 호출 로직 개선, Lazy-loading 도입',
        '근무 학원과의 연계 배포를 통한 50명의 사용자 피드백 및 유지보수',
        'MSA 구축을 통한 확장성, 유지보수성의 장점과 배포 및 운영 관리의 복잡함의 단점 경험',
        'Apache 2.0 License 기반의 GitHub 배포를 통한 오픈소스로서 2차 가공 기회 제공',
      ],
      skills: [
        'React',
        'JavaScript',
        'Redux, React-query, Axios, Suspense',
        'MediaQuery, React-responsive',
        'FastAPI, Python, MySQL',
        'ChatGPT API, Prompt Engineering',
        'Mui, Boostrap',
        'Git, JIRA, Figma',
      ],
      functions: [
        '로그인 및 회원가입',
        '게시판, 알고리즘 문제 풀이, 채점상황 확인, 스터디룸 내 Q&A, 맞춤형 로드맵',
        'ChatGPT 기반 Q&A 시스템, FAISS 기반 유사/비유사 로직 코드 제공',
        'AI 기반 알고리즘 문제 생성, AI 시스템 플러그인 기능',
        '마이페이지 내 Recharts 기반의 시각적 경험의 학습 상태 확인',
      ],
      GitUrl: 'https://github.com/PDA-PRO/.github',
      isOut: true,
      etcUrl: ['http://codingcoach.co.kr/'],
      pictures: [
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/main.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/main2.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/login.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/tasks.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/solve.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/result.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/commu.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/innercommu.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/group.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/QA.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/manage1.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/coco/manage2.png',
      ],
      isVideo: true,
      video: 'https://www.youtube.com/embed/QmN3g7kjjw4',
    },
    {
      name: 'OFFSIDE',
      day: '2023.04 ~ 2023.10',
      isWeb: false,
      isAward: true,
      award: ['2023 관광데이터 활용 공모전 우수상'],
      team: '5인, UI/UX 기획 1 + 앱 개발 4',
      role: ['Team Leader', 'Flutter 기반 앱 개발', 'UI/UX 설계'],
      why: [
        'K리그 관중 증가에 따른 K리그 타겟 모바일 애플리케이션 제작',
        '관중들이 경기 직관 시에 즐길 수 있는 먹거리 및 관광지 정보 제공',
        '지역 관광 활성화를 위한 지역 관광지 정보 제공',
      ],
      description: [
        'Flutter내 MVVM 아키텍처 적용 애플리케이션 제작 및 배포',
        'Git-flow브랜치 전략 도입, JIRA를 통한 Agile 방법론 도입으로 효율적 협업 진행',
        '지난 2022 대회 보다 성장한 결과 (장려상 → 우수상)',
        'Firebase 기반 실시간 채팅 기능 (팀 커뮤니티) 제작',
        '구글, K리그 홈페이지 Crawling을 통한 실시간 경기 정보 제공',
      ],
      skills: [
        'Flutter',
        'Dart',
        'Provider, MediaQuery',
        'Firebase',
        'Kakao API, Tour API 4.0',
        'Figma',
        'Git, JIRA',
      ],
      functions: [
        '카카오 로그인 및 시스템 회원가입',
        '팀 커뮤니티, 위치 기반 관광지 검색, K 리그 경기장 주변 관광지 정보 제공',
        '여행 계획 수립 및 일정 관리, K 리그 경기 정보 제공',
      ],
      GitUrl: 'https://github.com/OFFSIDE-PDA/OFFSIDE',
      isOut: false,
      etcUrl: [''],
      pictures: [
        'https://raw.githubusercontent.com/OFFSIDE-PDA/OFFSIDE/main/img/img1.jpg',
        'https://raw.githubusercontent.com/OFFSIDE-PDA/OFFSIDE/main/img/img2.jpg',
        'https://raw.githubusercontent.com/OFFSIDE-PDA/OFFSIDE/main/img/img3.jpg',
        'https://raw.githubusercontent.com/OFFSIDE-PDA/OFFSIDE/main/img/img4.jpg',
        'https://raw.githubusercontent.com/OFFSIDE-PDA/OFFSIDE/main/img/img5.jpg',
      ],
      isVideo: false,
      video: '',
    },
    {
      name: '자극에 대한 역치 감소',
      day: '2023.03 ~ 2023.06',
      isWeb: true,
      isAward: false,
      award: [''],
      team: '3인, FE 1 + BE 1 + Data 정제 1',
      role: [
        'Team Leader',
        'Front-End',
        'Back-End',
        'UI/UX 설계',
        'Data Processing',
      ],
      why: [
        '자극적 제목의 낚시성 기사에 대한 비판적 사고 함양',
        '2023 빅데이터 시스템 교과목 프로젝트',
      ],
      description: [
        '약 73만개의 대용량 비정형 데이터 처리 웹 서비스 개발',
        'Suspense를 통한 Lazy-loading 도입으로 웹 성능 최적화',
        'Recharts를 통한 차트 서비스 개발',
        '검색 서비스 성능 개선을 위한 MongoDB 쿼리 최적화, 로딩 화면 제공',
        'NoSQL Database Handling',
      ],
      skills: [
        'React JS',
        'Bootstrap, CSS3',
        'Suspense, React Hooks, Recharts',
        'FastAPI, Python',
        'MongoDB',
      ],
      functions: [
        '카테고리 별 기사 분류',
        '자동생성 낚시성 기사 / 직접생성 낚시성 기사 / 자동생성 비낚시성 기사 구분 게임 기능',
        '기사 검색 → 해당 기사 진실/거짓 판단',
      ],
      GitUrl: 'https://github.com/lookinmin/BigDataSystem',
      isOut: false,
      etcUrl: [''],
      pictures: [
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/main.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/gamepage.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/game_detail-1.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/game_detail-2.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/game_detail-3.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/game_detail-4.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/search.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/chart1.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/chart2.png',
        'https://raw.githubusercontent.com/lookinmin/BigDataSystem/main/img/data.png',
      ],
      isVideo: false,
      video: '',
    },
    {
      name: 'P.I.Shield',
      day: '2022.11.04 ~ 2022.11.05',
      isWeb: false,
      isAward: true,
      award: ['2022 충청권 ICT 메이커톤 우수상'],
      team: '4인',
      role: [
        'Team Leader',
        'Flutter 기반 앱 개발',
        'FastAPI 기반 REST API 설계 및 제작',
        'openCV, EasyOCR 기반 이미지 처리',
      ],
      why: [
        '무심코 찍는, SNS에 업로드 되는 이미지 속 개인정보 유포 불감증에 대한 대안 제시',
        'AI 기반 기술을 사용한 REST API 및 애플리케이션 제작',
      ],
      description: [
        'FastAPI 기반 REST API 설계 및 제작 후 해당 API를 활용한 애플리케이션 제작',
        'AI 기술(이미지 처리)을 사용한 앱 서비스 제작',
        '무박 2일간 대회를 통한 몰입도 높은 개발 과정 경험',
      ],
      skills: [
        'Flutter',
        'Future - await',
        'FastAPI, Python',
        'EasyOCR, openCV',
      ],
      functions: [
        '이미지에서 개인정보 Text 인식',
        '인식 Text 분석을 통한 개인정보 유무 판단 및 모자이크 후처리 이미지 저장',
      ],
      GitUrl: 'https://github.com/lookinmin/P.I.Shield',
      isOut: false,
      etcUrl: [''],
      pictures: [],
      isVideo: true,
      video: 'https://www.youtube.com/embed/u6QpFJT4SDU',
    },
    {
      name: 'Festival-ing : Fing',
      day: '2022.04 ~ 2022.10',
      isWeb: false,
      isAward: true,
      award: ['2022 관광데이터 활용 공모전 장려상'],
      team: '6인',
      role: ['Team Leader', 'Flutter 기반 앱 개발', 'Front-End', 'UI/UX 설계'],
      why: [
        'COVID 19 하락세 및 관광 수요 증가에 편승한 애플리케이션 제작',
        '전국 축제에 대한 홍보 및 지역 경제 활성화 독려 애플리케이션 제작',
      ],
      description: [
        'Flutter + Firebase 기반 애플리케이션 제작',
        '마케팅 수단으로서의 웹 페이지 제작 및 SEO 최적화',
        '반응형 UI 및 스크롤 애니메이션 등 동적 사용자 경험 제공',
        'GitHub Pages를 통한 웹 페이지 배포',
        'Google PlayStore 정책 미숙지로 인한 앱 배포 실패로 정책 숙지의 중요성 인지',
      ],
      skills: [
        'React JS',
        'Flutter',
        'React Hooks, MediaQuery',
        'Firebase',
        'Kakao API, Tour API 4.0',
        'Figma, GitHub Pages',
      ],
      functions: [
        '전국 축제 관련 개최 시기, 위치 등 정보 제공',
        '축제 개최지 주위 식당, 숙박, 전통시장 등 추가 정보 제공',
        '현재 내 위치 기반 주변 축제 정보 제공',
      ],
      GitUrl: 'https://github.com/lookinmin/Fing',
      isOut: true,
      etcUrl: ['https://lookinmin.github.io/'],
      pictures: [
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/mark.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/main.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/fest.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/fest2.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/goods.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/mypage.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/loca.png',
        'https://raw.githubusercontent.com/lookinmin/lookinmin/main/img/fing/heart.png',
      ],
      isVideo: false,
      video: '',
    },
  ];

  return (
    <StyledWrapper id="project">
      <div>
        <PiCodeBlockFill size={30} color="c7e5ff" />
        <p>PROJECTS</p>
      </div>

      <p>한 눈에 모아보기</p>
      <Chart />

      {projects.map((project) => {
        return (
          <ProjectBox key={project.name} layoutType={project.isWeb}>
            <h3>[ {project.name} ]</h3>
            <p className="day">{project.day}</p>
            <div className="top">
              <div className="left">
                {project.isWeb ? (
                  <WebGrid>
                    {project.isVideo ? (
                      <iframe
                        width="100%"
                        height="420"
                        src={project.video}
                        title={project.name}
                        allowFullScreen
                      />
                    ) : (
                      <></>
                    )}
                    <Carousel className="imgSlide">
                      {project.pictures.map((url) => {
                        return (
                          <Paper key={url}>
                            <img
                              height="390"
                              width="100%"
                              style={{
                                paddingTop: '5px',
                                objectFit: 'contain',
                                objectPosition: 'center',
                              }}
                              src={url}
                              alt="프로젝트 이미지"
                            />
                          </Paper>
                        );
                      })}
                    </Carousel>
                  </WebGrid>
                ) : (
                  <AppShow>
                    {project.isVideo ? (
                      <ResponsiveFrame
                        src={project.video}
                        title={project.name}
                        allowFullScreen
                      />
                    ) : (
                      <Carousel className="imgSlide">
                        {project.pictures.map((url) => {
                          return (
                            <Paper key={url}>
                              <img
                                style={{
                                  width: '100%',
                                  height: '670px',
                                  objectFit: 'contain',
                                  objectPosition: 'center',
                                }}
                                src={url}
                                alt="프로젝트 이미지"
                              />
                            </Paper>
                          );
                        })}
                      </Carousel>
                    )}
                  </AppShow>
                )}
              </div>

              <div className="right">
                <div className="isUp">
                  <IoPeopleSharp size={25} color="skyblue" />
                  <p>팀 구성</p>
                </div>
                <p>{project.team}</p>

                {project.isAward ? (
                  <>
                    <div className="isUp">
                      <TbAwardFilled size={25} color="gold" />
                      <p style={{ color: 'gold' }}>수상 내역</p>
                    </div>
                    {project.award.map((val) => {
                      return <li>{val}</li>;
                    })}
                  </>
                ) : (
                  <></>
                )}

                <div className="isUp">
                  <MdOutlineLaptopChromebook size={25} color="skyblue" />
                  <p>역할</p>
                </div>
                {project.role.map((val) => {
                  return <li>{val}</li>;
                })}
                <div className="isUp">
                  <BsQuestionLg size={25} color="skyblue" />
                  <p>Project 목적</p>
                </div>
                {project.why.map((val) => {
                  return <li>{val}</li>;
                })}
                <div className="isUp">
                  <PiBooksDuotone size={25} color="skyblue" />
                  <p>활용 기술 스택</p>
                </div>
                {project.skills.map((val) => {
                  return <li>{val}</li>;
                })}
                {project.isOut ? (
                  <>
                    <div className="isUp">
                      <FiLink size={25} color="skyblue" />
                      <p>URL</p>
                    </div>
                    {project.etcUrl.map((val) => {
                      return (
                        <p
                          className="link"
                          onClick={() => window.open(`${val}`)}
                        >
                          {val}
                        </p>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
                <div
                  className="git"
                  onClick={() => window.open(`${project.GitUrl}`)}
                >
                  <IoLogoGithub size={27} color="#f7f7f7" />
                  <p>Click to GitHub</p>
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="isUp">
                <IoCheckmark size={25} color="skyblue" />
                <p>주요 기능</p>
              </div>
              {project.functions.map((val) => {
                return <li>{val}</li>;
              })}

              <div className="isUp" style={{ marginTop: '2vh' }}>
                <BsExclamationLg size={25} color="skyblue" />
                <p>경험 사항</p>
              </div>
              {project.description.map((val) => {
                return <li>{val}</li>;
              })}
            </div>
          </ProjectBox>
        );
      })}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 2vh;
  justify-content: start;
  align-items: center;
  padding-top: 7vh;
  padding-bottom: 5vh;
  & > div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 2vh;
    & > p {
      font-family: 'WavvePADO-Regular';
      font-size: 1.8rem;
      font-weight: 500;
      color: #c7e5ff;
    }
  }
`;

const ResponsiveFrame = styled.iframe`
  width: 50%;
  height: 550px;
  @media (max-width: 1250px) {
    width: 90%;
  }
`;

const ProjectBox = styled.div<ProjectType>`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5em;
  align-items: center;
  width: 75%;
  border-top: 1px solid #aaaaaa;

  & > h3 {
    font-size: 1.5em;
  }

  & > .day {
    font-size: 0.9em;
    color: #aaaaaa;
  }

  & > .top {
    display: grid;
    width: 100%;
    grid-template-columns: ${(props) =>
      props.layoutType === true ? '5.5fr 4.5fr' : '4.5fr 5.5fr'};
    padding-top: 3vh;

    & > .left {
      padding-right: 2vw;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      height: 100%;
    }

    & > .right {
      padding-left: 2vw;
      border-left: 2px dotted #919191;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      height: 100%;
      & > .isUp {
        display: flex;
        flex-flow: row nowrap;
        gap: 10px;
        align-items: center;
        font-size: 1.2em;
        padding: 1vh 0;
        color: skyblue;
      }
      & > p {
        padding-bottom: 10px;
      }
      & > li {
        padding-bottom: 7px;
      }
      & > .link {
        cursor: pointer;
        color: #b3b3b3;
        text-decoration: underline;
        width: fit-content;
        &:hover {
          color: #aff0a9;
        }
      }
      & > .git {
        cursor: pointer;
        display: flex;
        flex-flow: row nowrap;
        gap: 10px;
        align-items: end;
        text-decoration: underline;
        color: #919191;
        margin-top: 1vh;
        font-size: 0.9em;
        &:hover {
          color: skyblue;
        }
        width: fit-content;
      }
    }
  }

  & > .bottom {
    display: flex;
    flex-flow: column nowrap;
    /* width: 100%; */
    margin-top: 2vh;

    & > .isUp {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;
      align-items: center;
      font-size: 1.2em;
      padding: 1vh 0;
      color: skyblue;
    }

    & > p {
      padding-bottom: 10px;
    }

    & > li {
      line-height: 1.7em;
    }
  }
`;

const WebGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > .imgSlide {
    width: 100%;
    & > div {
      max-height: 380px !important;
    }
  }
`;

const AppShow = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
  justify-content: center;
  height: 100%;

  padding-right: 2vw;
  & > .imgSlide {
    width: 60%;
    & > div {
      max-height: 650px !important;
    }
    @media (max-width: 1250px) {
      width: 90%;
    }
  }
`;
