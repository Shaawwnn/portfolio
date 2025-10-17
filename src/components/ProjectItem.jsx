import React from "react";
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProjectItem = ({ data }) => {
  return (
    <Slide direction={data.category === "iot" && "right"} triggerOnce>
      <ProjectItemContainer
        className={`${data.category === "iot" ? "vendoReverse" : ""}`}
      >
        <div className={`projImg ${data.category === "iot" && "vendo"}`}>
          <img src={data.img} alt="" />
        </div>
        <div className="description">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <div className="projBtn">
            {data.siteURL && (
              <a href={data.siteURL} target="blank">
                <div className="projLink">
                  <VisibilityIcon /> <span>Live Demo</span>
                </div>
              </a>
            )}
            <a href={data.repoURL} target="blank">
              <div className="projLink">
                <GitHubIcon /> Repo
              </div>
            </a>
          </div>
          <div className="stack">
            {data.stack.map((x, i) => {
              return <img src={`/${x}`} alt="" className="projStack" key={i} />;
            })}
          </div>
        </div>
      </ProjectItemContainer>
    </Slide>
  );
};

export default ProjectItem;

const ProjectItemContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Courier Prime", monospace;
  margin-bottom: 20px;
  .projImg {
    img {
      width: 500px;
      max-width: 85vw;
    }
  }

  .description {
    padding: 50px;
    p {
      line-height: 20px;
    }

    h2 {
      font-size: 40px;
    }

    .projBtn {
      display: flex;
      margin-top: 20px;
      a {
        text-decoration: none;
        margin-right: 20px;
      }
      .projLink {
        transition: all 250ms ease;
        color: #00D9FF;
        display: flex;
        align-items: center;
        gap: 5px;
        &:hover {
          color: #FF6B9D;
          transform: scale(1.04);
          text-shadow: 0 0 15px rgba(255, 107, 157, 0.5);
        }
      }
    }

    @media screen and (max-width: 800px) {
      padding: 50px 16px;
    }
  }

  .vendo {
    img {
      width: 270px;
    }
  }

  &.vendoReverse {
    flex-direction: row-reverse;
  }

  .stack {
    margin-top: 30px;
    img {
      height: 20px;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;

    &.vendoReverse {
      flex-direction: column;
    }
  }
`;
