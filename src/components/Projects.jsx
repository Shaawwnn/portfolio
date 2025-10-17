import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
import ProjectItem from "./ProjectItem";
import data from "../projectData";

const Projects = () => {
  return (
    <ProjectContainer>
      <Zoom triggerOnce>
        <h1 className="projectHeader">
          <span>&lt;</span> My_Projects <span>&#x2f;&gt;</span>
        </h1>
      </Zoom>
      <div className="projects">
        {data.map((item, idx) => (
          <ProjectItem data={item} key={idx} />
        ))}
      </div>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px 0;
  overflow: hidden;
  h1 {
    text-align: center;

    font-size: 50px;
    color: #FFFFFF;
    margin-bottom: 30px;
    span {
      color: #00D9FF;
      text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
    }

    @media screen and (max-width: 800px) {
      font-size: 35px;
    }
  }
`;
