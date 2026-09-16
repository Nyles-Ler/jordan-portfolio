import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';
import heroImage from '../../assets/images/profile/hero-image.png';

import { HeroImage } from '../../components/HeroImage/HeroImage';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  min-height: 85vh;
  padding: 5rem 8%;
  background-color: #050816;
  color: #f5f5f5;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 1;
  letter-spacing: -2px;
`;

const Highlight = styled.span`
  color: #8a3ffc;
`;

const HeroDescription = styled.p`
  max-width: 700px;
  margin: 0;
  color: #c4c9d4;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Text
          text="Junior Full Stack Web Developer"
          backgroundColor="#050816"
        />

        <HeroTitle>
          Hi, I'm <Highlight>Jordan Lerat.</Highlight>
        </HeroTitle>

        <HeroDescription>
          I am a Full Stack Web Development student at RRC Polytech with
          experience building responsive websites, full-stack applications,
          reusable components, and Docker-based development environments.
        </HeroDescription>

        <ButtonGroup>
          <a href="#work">
            <Button text="View My Work" backgroundColor="#8a3ffc" />
          </a>

          <a
            href="https://github.com/Nyles-Ler"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="View GitHub" backgroundColor="#050816" />
          </a>
        </ButtonGroup>
      </HeroContent>

      <ImageContainer>
        <HeroImage src={heroImage} alt="Jordan Lerat portfolio hero" />
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;
