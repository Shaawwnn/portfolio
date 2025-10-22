import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import MouseScroll from "./MouseScroll";

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Software Engineer", "Full-Stack Developer", "DevOps Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);
  
  return (
    <HomeContainer>
      <HeroContent>
        <HeroText>
          <Fade delay={300} triggerOnce>
            <Greeting>
              <span className="tag">&lt;<span className="tagName">p</span>&gt;</span>
              Hi there! I'm
              <span className="tag">&lt;/<span className="tagName">p</span>&gt;</span>
            </Greeting>
          </Fade>

          <Fade delay={500} triggerOnce>
            <NameContainer>
              <span className="tag">&lt;<span className="tagName">h1</span>&gt;</span>
              <Name>SHAWN ALBERTO</Name>
              <span className="tag">&lt;/<span className="tagName">h1</span>&gt;</span>
            </NameContainer>
          </Fade>

          <Fade delay={700} triggerOnce>
            <RoleContainer>
              <span className="tag">&lt;<span className="tagName">span</span>&gt;</span>
              <RoleText>
                I'm a <AnimatedRole key={currentRole}>{roles[currentRole]}</AnimatedRole> with 2+ years of experience
              </RoleText>
              <span className="tag">&lt;/<span className="tagName">span</span>&gt;</span>
            </RoleContainer>
          </Fade>

          <Fade delay={900} triggerOnce>
            <Description>
              <span className="tag">&lt;<span className="tagName">p</span>&gt;</span>
              <p>
                Passionate about creating <Highlight>clean, efficient applications</Highlight> and 
                exploring <Highlight>cloud infrastructure</Highlight>.
              </p>
              <span className="tag">&lt;/<span className="tagName">p</span>&gt;</span>
            </Description>
          </Fade>

          <Slide triggerOnce delay={1100}>
            <ActionButtons>
              <PrimaryButton href="#connect">Let's Connect</PrimaryButton>
              <SecondaryButton href="#projects">View Work</SecondaryButton>
            </ActionButtons>
          </Slide>
        </HeroText>

        <HeroImage>
          <Zoom triggerOnce delay={600}>
            <ImageContainer>
              <img src="/me.png" alt="Shawn Alberto" />
            </ImageContainer>
          </Zoom>
        </HeroImage>
      </HeroContent>

      <ScrollIndicator>
        <MouseScroll />
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 80px;
  margin: 0;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  margin-bottom: 40px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Greeting = styled.div`
  font-family: "Courier Prime", monospace;
  font-size: 1.1rem;
  color: #E4E9F2;
  margin-bottom: 15px;
  
  .tag {
    color: #9BA4B5;
    .tagName {
      color: #00D9FF; /* Cyan for p tags */
    }
  }
`;

const NameContainer = styled.div`
  margin-bottom: 20px;
  
  .tag {
    color: #9BA4B5;
    font-family: "Courier Prime", monospace;
    font-size: 1.1rem;
    .tagName {
      color: #FF6B9D; /* Pink for h1 tags */
    }
  }
`;

const Name = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #FFFFFF;
  text-shadow: 0 0 30px rgba(0, 217, 255, 0.3);
  margin: 15px 0;
  letter-spacing: 1px;
`;

const RoleContainer = styled.div`
  margin-bottom: 20px;
  
  .tag {
    color: #9BA4B5;
    font-family: "Courier Prime", monospace;
    font-size: 1rem;
    .tagName {
      color: #00FF88; /* Green for span tags */
    }
  }
`;

const RoleText = styled.div`
  font-family: "Courier Prime", monospace;
  font-size: 1.2rem;
  color: #E4E9F2;
  margin: 10px 0;
`;

const AnimatedRole = styled.span`
  color: #FF6B9D;
  font-weight: 700;
  text-shadow: 0 0 15px rgba(255, 107, 157, 0.4);
  animation: fadeInUp 0.6s ease-in-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Description = styled.div`
  margin-bottom: 30px;
  
  .tag {
    color: #9BA4B5;
    font-family: "Courier Prime", monospace;
    font-size: 1rem;
    .tagName {
      color: #00D9FF; /* Cyan for p tags */
    }
  }
  
  p {
    font-family: "Courier Prime", monospace;
    font-size: 1rem;
    color: #E4E9F2;
    line-height: 1.5;
    margin: 10px 0;
  }
`;

const Highlight = styled.span`
  color: #00D9FF;
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
  color: #0A0E27;
  text-decoration: none;
  font-family: "Courier Prime", monospace;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 300ms ease;
  box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
  
  &:hover {
    background: transparent;
    color: #00D9FF;
    border-color: #00D9FF;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 217, 255, 0.4);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: transparent;
  color: #E4E9F2;
  text-decoration: none;
  font-family: "Courier Prime", monospace;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 2px solid rgba(0, 217, 255, 0.3);
  transition: all 300ms ease;
  
  &:hover {
    background: rgba(0, 217, 255, 0.1);
    color: #00D9FF;
    border-color: #00D9FF;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 217, 255, 0.2);
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1024px) {
    order: -1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    border: 2px solid rgba(0, 217, 255, 0.3);
    transition: all 300ms ease;
  }
  
  &:hover {
    img {
      transform: scale(1.02);
      border-color: #00D9FF;
    }
  }
  
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
  
  @media screen and (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) scale(0.6);
  opacity: 0.8;
  
  @media screen and (max-width: 768px) {
    transform: translateX(-50%) scale(0.5);
    bottom: 10px;
  }
  
  @media screen and (max-width: 480px) {
    transform: translateX(-50%) scale(0.4);
    bottom: 5px;
  }
`;
