import React from "react";
import Tech from "./Tech";
import { techStack } from "../projectData";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";

const TechStack = () => {
  return (
    <TechStackOuter>
      <TechStackHeader>
        <Zoom triggerOnce>
          <h1 className="projectHeader">
            <span>&lt;</span> Tools_I_Use <span>&#x2f;&gt;</span>
          </h1>
        </Zoom>
      </TechStackHeader>
      <TechStackContainer>
        <div className="techStackInner">
          {techStack.map((x, i) => (
            <Fade delay={i * 70} triggerOnce key={i}>
              <Tech stack={x} />
            </Fade>
          ))}
        </div>
      </TechStackContainer>
    </TechStackOuter>
  );
};

export default TechStack;

const TechStackOuter = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const TechStackContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;

  .techStackInner {
    width: 90vw;
    max-width: 700px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-content: center;
    justify-content: center;
    grid-column-gap: 50px;
    grid-row-gap: 2em;
    padding: 20px;
    margin-bottom: 100px;
    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 2.5em;
      grid-row-gap: 2em;
    }
  }
`;

const TechStackHeader = styled.div`
  margin: 50px 0;
  h1 {
    text-align: center;

    font-size: 50px;
    color: white;
    margin-bottom: 30px;
    span {
      color: #c6de41;
    }

    @media screen and (max-width: 800px) {
      font-size: 35px;
    }
  }
`;
