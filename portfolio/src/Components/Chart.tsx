import React from 'react';
import styled from 'styled-components';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1vw;
  width: 80%;
  place-content: center;
  margin: 3vh 0;

  & > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr; /* 1열 */
    row-gap: 2vh; /* 행 간격을 2vh로 설정 */
  }
`;

const data = [
  { name: '웹 서비스', value: 4 },
  { name: '모바일 앱 서비스', value: 2 },
  { name: '복합 서비스', value: 2 },
];

const data2 = [
  { name: 'React(JS+TS)', value: 6 },
  { name: 'FastAPI(Python)', value: 5 },
  { name: 'Flutter', value: 3 },
  { name: 'MySQL', value: 2 },
  { name: 'MongoDB', value: 2 },
  { name: 'Firebase', value: 2 },
];

const COLORS = ['#40a6ff', '#00c472', '#ffa228'];
const COLORS2 = [
  '#5db3ff',
  '#00c472',
  '#8c28ff',
  '#4fc9c3',
  '#c7d13c',
  '#ff6c28',
];

export const Chart: React.FC = () => {
  return (
    <StyledDiv>
      <div style={{ width: '100%' }}>
        <li>서비스 도메인 환경</li>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%" // 차트의 중앙 x좌표
              cy="50%" // 차트의 중앙 y좌표
              labelLine={false} // 라벨 선 제거
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              } // 라벨에 이름과 퍼센트 표시
              outerRadius={120} // 파이차트 반지름
              fill="#8884d8"
              dataKey="value" // 데이터 값에 대응하는 키
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '100%' }}>
        <li>개발 언어 및 프레임 워크</li>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data2}
              cx="50%" // 차트의 중앙 x좌표
              cy="50%" // 차트의 중앙 y좌표
              labelLine={false} // 라벨 선 제거
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              } // 라벨에 이름과 퍼센트 표시
              outerRadius={120} // 파이차트 반지름
              // fill="#8884d8"
              dataKey="value" // 데이터 값에 대응하는 키
              startAngle={90}
              endAngle={450}
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS2[index % COLORS2.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </StyledDiv>
  );
};
