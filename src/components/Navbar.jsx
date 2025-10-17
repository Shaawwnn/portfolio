import React from "react";
import styled from "styled-components";
import DownloadIcon from "@mui/icons-material/Download";

export const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBarInner>
        <a href="/">
          <div className="logo">
            <img src="/sasa.png" alt="" />
          </div>
        </a>

        <div className="cv">
          <a href="/Shawn_Michael_Alberto_CV.pdf" download>
            <DownloadIcon />
            CV
          </a>
        </div>
      </NavBarInner>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  height: 70px;
  z-index: 1000;
  //border-bottom: 2px solid #153b44;
`;

const NavBarInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
  height: 100%;
  margin: auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    img {
      width: 60px;
    }
  }

  .navMenu ul {
    display: flex;
    gap: 50px;

    li {
      list-style-type: none;

      a {
        text-decoration: none;

        color: white;
      }
    }
  }

  .cv a {
    font-family: "Courier Prime", monospace;
    border: 2px solid #00D9FF;
    border-radius: 8px;
    padding: 10px 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #00D9FF;
    text-decoration: none;
    transition: all 300ms ease;
    font-weight: 700;
    background: transparent;

    &:hover {
      background-color: #00D9FF;
      color: #0A0E27;
      box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
`;
