import React from "react";
import styled from "styled-components";

const Tech = ({ stack }) => {
  return (
    <TechContainer>
      <div className="imgContainer">
        <img src={stack} alt="" />
      </div>
    </TechContainer>
  );
};

export default Tech;

const TechContainer = styled.div`
  .imgContainer {
    img {
      width: 100%;
      transition: all 300ms ease-out;
      filter: grayscale(30%);

      &:hover {
        transform: translateY(-10px) scale(1.05);
        filter: grayscale(0%) drop-shadow(0 0 15px rgba(0, 217, 255, 0.4));
      }
    }
  }
`;
