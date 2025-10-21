import React, { useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProjectItem = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProjectCard 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`project-card ${data.category}`}
    >
      <ProjectImage className="project-image">
        <img src={data.img} alt={data.title} />
        <Overlay className={isHovered ? "active" : ""}>
          <div className="overlay-content">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </Overlay>
      </ProjectImage>
      
      <ProjectContent>
        <ProjectHeader>
          <h2>{data.title}</h2>
          <CategoryBadge className={data.category}>
            {data.category === "web" ? "Web App" : "IoT Project"}
          </CategoryBadge>
        </ProjectHeader>
        
        <ProjectDescription>
          <p>{data.description}</p>
        </ProjectDescription>

        <TechStack>
          {data.stack.map((tech, i) => (
            <TechIcon key={i}>
              <img src={`/${tech}`} alt={tech.replace('.png', '').replace('.jpg', '')} />
            </TechIcon>
          ))}
        </TechStack>

        <ProjectActions>
          {data.siteURL && (
            <ActionButton href={data.siteURL} target="_blank" rel="noopener noreferrer" className="primary">
              <VisibilityIcon />
              <span>Live Demo</span>
            </ActionButton>
          )}
          <ActionButton href={data.repoURL} target="_blank" rel="noopener noreferrer" className="secondary">
            <GitHubIcon />
            <span>View Code</span>
          </ActionButton>
        </ProjectActions>
      </ProjectContent>
    </ProjectCard>
  );
};

export default ProjectItem;

const ProjectCard = styled.div`
  background: rgba(30, 39, 73, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 400ms ease;
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: #00D9FF;
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.3);
    background: rgba(30, 39, 73, 0.6);

    .project-image img {
      transform: scale(1.05);
    }
  }

  &.web {
    border-color: rgba(0, 217, 255, 0.3);
    
    &:hover {
      border-color: #00D9FF;
      box-shadow: 0 20px 40px rgba(0, 217, 255, 0.4);
    }
  }

  &.iot {
    border-color: rgba(255, 107, 157, 0.3);
    
    &:hover {
      border-color: #FF6B9D;
      box-shadow: 0 20px 40px rgba(255, 107, 157, 0.4);
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 400ms ease;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.9) 0%, rgba(255, 107, 157, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 300ms ease;
  backdrop-filter: blur(5px);

  &.active {
    opacity: 1;
  }

  .overlay-content {
    text-align: center;
    padding: 20px;
    color: #0A0E27;

    h3 {
      font-family: "Courier Prime", monospace;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-family: "Courier Prime", monospace;
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;

  h2 {
    font-family: "Courier Prime", monospace;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    flex: 1;
  }
`;

const CategoryBadge = styled.div`
  padding: 4px 12px;
  border-radius: 15px;
  font-family: "Courier Prime", monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.web {
    background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
    color: #0A0E27;
  }

  &.iot {
    background: linear-gradient(135deg, #FF6B9D 0%, #E91E63 100%);
    color: #FFFFFF;
  }
`;

const ProjectDescription = styled.div`
  margin-bottom: 20px;
  flex: 1;

  p {
    font-family: "Courier Prime", monospace;
    color: #E4E9F2;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(0, 217, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;

  &:hover {
    background: rgba(0, 217, 255, 0.2);
    transform: scale(1.1);
  }

  img {
    width: 20px;
    height: 20px;
    filter: grayscale(20%);
    transition: all 300ms ease;
  }

  &:hover img {
    filter: grayscale(0%);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  text-decoration: none;
  font-family: "Courier Prime", monospace;
  font-size: 13px;
  font-weight: 600;
  transition: all 300ms ease;
  flex: 1;
  justify-content: center;

  &.primary {
    background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
    color: #0A0E27;
    border: 2px solid transparent;

    &:hover {
      background: transparent;
      color: #00D9FF;
      border-color: #00D9FF;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 217, 255, 0.3);
    }
  }

  &.secondary {
    background: transparent;
    color: #E4E9F2;
    border: 2px solid rgba(0, 217, 255, 0.3);

    &:hover {
      background: rgba(0, 217, 255, 0.1);
      border-color: #00D9FF;
      color: #00D9FF;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 217, 255, 0.2);
    }
  }

  .MuiSvgIcon-root {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 16px;
    font-size: 12px;
    
    .MuiSvgIcon-root {
      font-size: 16px;
    }
  }
`;
