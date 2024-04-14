import React, { useState, useEffect } from "react";
import { TbSquareLetterL } from "react-icons/tb";
import styled from "styled-components";
import { Link } from "react-scroll";

interface HeaderProps {
  scrolled: boolean;
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader scrolled={isScrolled}>
      <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="logo">
          <TbSquareLetterL size={30} />
          <p>lookin_min's Portfolio</p>
        </div>
      </Link>

      <div>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <p>About Me</p>
        </Link>

        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
          <p>Skills</p>
        </Link>

        <Link to="career" spy={true} smooth={true} offset={-70} duration={500}>
          <p>Career</p>
        </Link>

        <Link to="project" spy={true} smooth={true} offset={-70} duration={500}>
          <p>Projects</p>
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div<HeaderProps>`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${(props) =>
    props.scrolled ? "rgba(50, 50, 50, 1)" : "rgba(0, 0, 0, 0)"};
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 5;

  & > a > .logo {
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
    & > a {
      cursor: pointer;
      font-size: 1.1rem;
      &:hover {
        color: #92caff;
        font-weight: 600;
      }
    }
  }
`;
