import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <p>lookin_min's Portfolio</p>
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
  & > div {
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

  & > p {
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
