import React from "react";
import styled from "styled-components";

const Tech = ({ tech }) => {
  return (
    <TechContainer>
      <div className="techCard">
        <div className="iconContainer">
          <img src={`/${tech.icon}`} alt={tech.name} />
        </div>
        <div className="techInfo">
          <h3 className="techName">{tech.name}</h3>
        </div>
      </div>
    </TechContainer>
  );
};

export default Tech;

const TechContainer = styled.div`
  width: 100%;
  max-width: 100px;

  .techCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 10px;
    transition: all 300ms ease;
    cursor: pointer;
    border-radius: 12px;

    &:hover {
      transform: translateY(-8px) scale(1.1);
      
      .iconContainer img {
        transform: scale(1.2);
        filter: grayscale(0%) drop-shadow(0 0 20px rgba(0, 217, 255, 0.6));
      }

      .techName {
        color: #00D9FF;
        text-shadow: 0 0 15px rgba(0, 217, 255, 0.8);
      }
    }
  }

  .iconContainer {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;

    img {
      max-width: 35px;
      max-height: 35px;
      width: auto;
      height: auto;
      transition: all 300ms ease;
      filter: grayscale(30%);
    }
  }

  .techInfo {
    .techName {
      font-family: "Courier Prime", monospace;
      color: #E4E9F2;
      font-size: 11px;
      font-weight: 600;
      margin: 0;
      transition: all 300ms ease;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 90px;

    .techCard {
      padding: 12px 8px;

      .iconContainer {
        height: 40px;
        margin-bottom: 6px;

        img {
          max-width: 30px;
          max-height: 30px;
        }
      }

      .techInfo {
        .techName {
          font-size: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 80px;

    .techCard {
      padding: 10px 6px;

      .iconContainer {
        height: 35px;
        margin-bottom: 5px;

        img {
          max-width: 28px;
          max-height: 28px;
        }
      }

      .techInfo {
        .techName {
          font-size: 9px;
        }
      }
    }
  }
`;
