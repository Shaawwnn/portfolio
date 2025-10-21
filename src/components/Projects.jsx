import React from "react";
import styled from "styled-components";
import { Zoom, Fade } from "react-awesome-reveal";
import ProjectItem from "./ProjectItem";
import data from "../projectData";

const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <Zoom triggerOnce>
          <h1 className="projectHeader">
            <span>&lt;</span> My_Projects <span>&#x2f;&gt;</span>
          </h1>
        </Zoom>
        <Fade triggerOnce delay={300}>
          <p className="subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </Fade>
      </ProjectHeader>
      
      <ProjectsGrid>
        {data.map((item, idx) => (
          <Fade delay={idx * 200} triggerOnce key={idx}>
            <ProjectItem data={item} index={idx} />
          </Fade>
        ))}
      </ProjectsGrid>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 60px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
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

  .subtitle {
    font-family: "Courier Prime", monospace;
    color: #E4E9F2;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media screen and (max-width: 480px) {
    gap: 25px;
  }
`;
