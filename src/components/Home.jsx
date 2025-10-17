import React from "react";
import styled from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import MouseScroll from "./MouseScroll";

const Home = () => {
  return (
    <HomeContainer>
      <div className="homeTitle">
        <Fade delay={300} triggerOnce duration={500}>
          <p>
            <span className="tag">
              &lt;<span className="tagName">p</span>&gt;
            </span>{" "}
            Hi! I am
            <span className="tag">
              {" "}
              &lt;&#x2f;<span className="tagName">p</span>&gt;
            </span>
          </p>
        </Fade>
        <Fade delay={500} triggerOnce duration={500}>
          <span className="tag">
            &lt;<span className="tagName">h1</span>&gt;
          </span>
          <h1>SHAWN ALBERTO</h1>
          <span className="tag">
            {" "}
            &lt;&#x2f;<span className="tagName">h1</span>&gt;
          </span>
        </Fade>
        <Fade triggerOnce delay={700} duration={500}>
          <p>
            <span className="tag">
              &lt;<span className="tagName">p</span>&gt;
            </span>{" "}
           I'm a <span className="title">Software Engineer</span> with 2 years of experience, focused on creating clean, efficient web applications. Currently expanding my expertise in <span className="title">DevOps</span> and cloud infrastructure.
            <span className="tag">
              {" "}
              &lt;&#x2f;<span className="tagName">p</span>&gt;
            </span>
          </p>
        </Fade>
        <Slide triggerOnce delay={1000} duration={750}>
          <div className="contactBtn">
            <a href="#contact">Contact Me</a>
          </div>
        </Slide>
      </div>
      <div className="img">
        <Zoom triggerOnce>
          <img src="/me.png" alt="" />
        </Zoom>
      </div>
      <div className="scroll">
        <MouseScroll />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 0 2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 70px);
  padding-bottom: 4rem;
  overflow: hidden;
  .tag {
    color: #9BA4B5;
    font-family: "Courier Prime", monospace;
    font-size: 1.3rem;

    .tagName {
      color: #00D9FF;
    }
  }
  .homeTitle {
    padding-left: 20px;

    h1 {
      font-family: "IBM Plex Sans";
      font-weight: 700;
      font-size: clamp(3rem, 12vw, 4.5rem);
      color: #FFFFFF;
      text-shadow: 0 0 30px rgba(0, 217, 255, 0.3);
    }

    p {
      font-family: "Courier Prime", monospace;
      color: #E4E9F2;
      font-size: 1.3rem;
      margin: 10px 0;
      line-height: 1.5rem;
      .title {
        font-weight: bold;
        color: #FF6B9D;
        text-shadow: 0 0 20px rgba(255, 107, 157, 0.4);
      }
    }
  }

  img {
    width: 400px;
  }

  .contactBtn {
    margin-top: 50px;

    a {
      font-family: "Courier Prime", monospace;
      border: 2px solid #00D9FF;
      border-radius: 8px;
      padding: 15px 40px;
      cursor: pointer;
      background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
      color: #0A0E27;
      text-decoration: none;
      transition: all 300ms ease;
      font-weight: 700;
      box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
      position: relative;
      overflow: hidden;

      &:hover {
        background: transparent;
        color: #00D9FF;
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.5);
        transform: translateY(-2px);
      }
    }
  }

  .scroll {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -20px;
    transform: scale(0.45);
  }

  @media screen and (max-width: 800px) {
    padding: 0 20px;
    .img {
      display: none;
    }

    .homeTitle {
      padding: 0;

      p {
        font-size: 16px;
      }

      .contactBtn {
      }
    }

    .tag {
      font-size: 14px;
    }
  }
`;
