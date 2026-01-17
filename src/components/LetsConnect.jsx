import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DownloadIcon from "@mui/icons-material/Download";
import styled from "styled-components";
import { Zoom, Fade } from "react-awesome-reveal";

const LetsConnect = () => {
  return (
    <ConnectContainer id="connect">
      <Zoom triggerOnce>
        <h1 className="connectHeader">
          <span>&lt;</span> Let's_Connect <span>&#x2f;&gt;</span>
        </h1>
      </Zoom>

      <Fade triggerOnce delay={300}>
        <p className="connectTagline">
          Ready to collaborate? Let's build something amazing together!
        </p>
      </Fade>

      <div className="connectContent">
        <Fade triggerOnce delay={500}>
          <div className="socialLinks">
            <a
              href="https://www.linkedin.com/in/shawn-alberto-041937227/"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Shaawwnn"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href="mailto:shawnalberto10@gmail.com" className="socialLink">
              <AlternateEmailIcon />
              <span>Email</span>
            </a>
          </div>
        </Fade>

        <Fade triggerOnce delay={700}>
          <div className="resumeSection">
            <a href="/ShawnAlberto_CV.pdf" download className="resumeBtn">
              <DownloadIcon />
              <span>Download Resume</span>
            </a>
          </div>
        </Fade>
      </div>
    </ConnectContainer>
  );
};

export default LetsConnect;

const ConnectContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 40px;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 50px;
    color: #FFFFFF;
    margin-bottom: 20px;
    span {
      color: #00D9FF;
      text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
    }

    @media screen and (max-width: 800px) {
      font-size: 35px;
    }
  }

  .connectTagline {
    font-family: "Courier Prime", monospace;
    color: #E4E9F2;
    font-size: 1.2rem;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
  }

  .connectContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
  }

  .socialLinks {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;

    .socialLink {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 25px;
      background: rgba(30, 39, 73, 0.3);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border: 1px solid rgba(0, 217, 255, 0.2);
      text-decoration: none;
      transition: all 300ms ease;
      min-width: 120px;

      &:hover {
        border-color: #00D9FF;
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.3);
        transform: translateY(-5px);
      }

      .MuiSvgIcon-root {
        color: #00D9FF;
        font-size: 50px;
        transition: all 300ms ease;
      }

      span {
        color: #E4E9F2;
        font-family: "Courier Prime", monospace;
        font-size: 16px;
        font-weight: 600;
      }

      &:hover .MuiSvgIcon-root {
        color: #FF6B9D;
        transform: scale(1.1);
        filter: drop-shadow(0 0 10px rgba(255, 107, 157, 0.5));
      }
    }

    @media screen and (max-width: 800px) {
      gap: 20px;
      
      .socialLink {
        min-width: 100px;
        padding: 20px;
        
        .MuiSvgIcon-root {
          font-size: 40px;
        }
      }
    }
  }

  .resumeSection {
    .resumeBtn {
      display: flex;
      align-items: center;
      gap: 15px;
      font-family: "Courier Prime", monospace;
      border: 2px solid #00D9FF;
      border-radius: 12px;
      padding: 18px 35px;
      cursor: pointer;
      background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
      color: #0A0E27;
      text-decoration: none;
      transition: all 300ms ease;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);

      &:hover {
        background: transparent;
        color: #00D9FF;
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.5);
        transform: translateY(-3px);
      }

      .MuiSvgIcon-root {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    padding: 20px 10px;
    gap: 30px;
    
    .connectTagline {
      font-size: 1rem;
    }
  }
`;
