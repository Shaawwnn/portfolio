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
      transition: all 250ms ease-out;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
`;
