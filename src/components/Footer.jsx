import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footerOuter">
        <div>
          <p className="footerTxt">
            <span>&#169;</span> 2025 Created by <span>Shawn Alberto</span>. All rights reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  .MuiSvgIcon-root {
    color: #00D9FF;
    font-size: 40px;
    transition: all 300ms ease;

    &:hover {
      color: #FF6B9D;
      transform: translateY(-3px);
      filter: drop-shadow(0 0 10px rgba(255, 107, 157, 0.5));
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    li {
      list-style-type: none;
      a {
      }
    }
  }

  .footerOuter {
    display: block;
  }

  .footerTxt {
    color: #E4E9F2;

    span {
      color: #00D9FF;
      font-weight: 800;
      text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
    }
  }
`;
