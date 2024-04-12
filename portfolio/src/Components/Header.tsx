import React from "react";
import { TbSquareLetterL } from "react-icons/tb";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <TbSquareLetterL size={30} />
        <p>lookin_min's Portfolio</p>
      </div>

      <div>
        <p>Skills</p>
        <p>Projects</p>
        <p>Career</p>
        <p>About Me</p>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: rgba(0, 0, 0, 0);
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1;

  & > div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5vw;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  & > div:nth-last-child(1) {
    display: flex;
    flex-flow: row nowrap;
    gap: 2.5vw;
    & > p {
      cursor: pointer;
      font-size: 1.1rem;
      &:hover {
        color: #92caff;
        font-weight: 600;
      }
    }
  }
`;
