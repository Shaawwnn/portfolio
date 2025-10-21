import React, { useState } from "react";
import Tech from "./Tech";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const techCategories = {
    all: {
      name: "All Technologies",
      techs: [
        { name: "HTML5", icon: "html.png" },
        { name: "CSS3", icon: "css.png" },
        { name: "Sass", icon: "sass.png" },
        { name: "JavaScript", icon: "js.png" },
        { name: "TypeScript", icon: "typescript.png" },
        { name: "React", icon: "react.png" },
        { name: "Node.js", icon: "nodejs.png" },
        { name: "Express", icon: "express.png" },
        { name: "MongoDB", icon: "mongo.png" },
        { name: "SQL", icon: "sql.png" },
        { name: "Firebase", icon: "firebase.png" },
        { name: "Material-UI", icon: "mui.png" },
        { name: "Styled Components", icon: "styled.jpg" },
        { name: "Git", icon: "git.png" },
        { name: "GitHub", icon: "github.png" },
        { name: "GitHub Actions", icon: "githubactions.png" },
        { name: "Postman", icon: "postman.png" },
        { name: "Jest", icon: "jest.svg" },
        { name: "Linux", icon: "linux.png" },
        { name: "Bash", icon: "bash.png" },
        { name: "Google Cloud", icon: "gcp.svg" },
        { name: "Docker", icon: "docker.png" },
        { name: "Arduino", icon: "arduino1.png" },
        { name: "C++", icon: "c++.png" },
        { name: "Adobe Creative", icon: "adobe.png" },
        { name: "B4A", icon: "b4a.png" },
      ]
    },
    frontend: {
      name: "Frontend",
      techs: [
        { name: "HTML5", icon: "html.png" },
        { name: "CSS3", icon: "css.png" },
        { name: "Sass", icon: "sass.png" },
        { name: "JavaScript", icon: "js.png" },
        { name: "TypeScript", icon: "typescript.png" },
        { name: "React", icon: "react.png" },
        { name: "Material-UI", icon: "mui.png" },
        { name: "Styled Components", icon: "styled.jpg" },
      ]
    },
    backend: {
      name: "Backend",
      techs: [
        { name: "Node.js", icon: "nodejs.png" },
        { name: "Express", icon: "express.png" },
        { name: "MongoDB", icon: "mongo.png" },
        { name: "SQL", icon: "sql.png" },
        { name: "Firebase", icon: "firebase.png" },
        { name: "Google Cloud", icon: "gcp.svg" },
      ]
    },
    tools: {
      name: "Tools & Others",
      techs: [
        { name: "Git", icon: "git.png" },
        { name: "GitHub", icon: "github.png" },
        { name: "GitHub Actions", icon: "githubactions.png" },
        { name: "Postman", icon: "postman.png" },
        { name: "Jest", icon: "jest.svg" },
        { name: "Linux", icon: "linux.png" },
        { name: "Bash", icon: "bash.png" },
        { name: "Docker", icon: "docker.png" },
        { name: "Arduino", icon: "arduino1.png" },
        { name: "C++", icon: "c++.png" },
        { name: "Adobe Creative", icon: "adobe.png" },
        { name: "B4A", icon: "b4a.png" },
      ]
    }
  };


  return (
    <TechStackOuter>
      <TechStackHeader>
        <Zoom triggerOnce>
          <h1 className="projectHeader">
            <span>&lt;</span> Tech_Stack <span>&#x2f;&gt;</span>
          </h1>
        </Zoom>
        <Fade triggerOnce delay={300}>
          <p className="subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </Fade>
      </TechStackHeader>

      <CategoryTabs>
        <Fade triggerOnce delay={500}>
          {Object.entries(techCategories).map(([key, category]) => (
            <CategoryButton
              key={key}
              active={activeCategory === key}
              onClick={() => setActiveCategory(key)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </Fade>
      </CategoryTabs>

      <TechStackContainer>
        <div className="techStackInner">
          {techCategories[activeCategory].techs.map((tech, i) => (
            <Fade delay={i * 50} triggerOnce key={tech.name}>
              <Tech tech={tech} />
            </Fade>
          ))}
        </div>
      </TechStackContainer>
    </TechStackOuter>
  );
};

export default TechStack;

const TechStackOuter = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

const TechStackHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

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
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;

const CategoryButton = styled.button`
  font-family: "Courier Prime", monospace;
  padding: 12px 24px;
  border: 2px solid ${props => props.active ? '#00D9FF' : 'rgba(0, 217, 255, 0.3)'};
  border-radius: 25px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%)' 
    : 'transparent'};
  color: ${props => props.active ? '#0A0E27' : '#E4E9F2'};
  cursor: pointer;
  transition: all 300ms ease;
  font-weight: 600;
  font-size: 14px;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: #00D9FF;
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%)' 
      : 'rgba(0, 217, 255, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 217, 255, 0.3);
  }

  @media screen and (max-width: 600px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`;

const TechStackContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;

  .techStackInner {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 25px;
    padding: 30px 20px;
    justify-items: center;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      gap: 20px;
      padding: 25px 15px;
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 15px;
      padding: 20px 10px;
    }
  }
`;
