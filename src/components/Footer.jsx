import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footerOuter">
        <ul className="links">
          <li>
            <a
              href="https://www.linkedin.com/in/shawn-michael-alberto-041937227/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Shaawwnn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="mailto:shawnalberto10@gmail.com">
              <AlternateEmailIcon />
            </a>
          </li>
        </ul>

        <div>
          <p className="footerTxt">
            <span>&#169;</span> Created by <span>Shawn Alberto</span>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  .MuiSvgIcon-root {
    color: #c6de41;
    font-size: 40px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    li {
      list-style-type: none;
      a {
      }
    }
  }

  .footerOuter {
    display: block;
  }

  .footerTxt {
    color: white;

    span {
      color: #c6de41;
      font-weight: 800;
    }
  }
`;
