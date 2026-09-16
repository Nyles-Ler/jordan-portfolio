import React from 'react';
import styled from 'styled-components';

import { Img } from '../Img/Img';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1.25rem;
  background-color: #050816;
  border: 1px solid #8a3ffc;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(138, 63, 252, 0.35);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px rgba(138, 63, 252, 0.65);
    transform: translateY(-4px);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content;
  min-height: 180px;
  padding: 1rem;
  background-color: #080b1a;
  border-radius: 10px;

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;

  a {
    display: inline-block;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    a {
      width: 100%;
    }
  }
`;

const ResourceCard = ({ resource }) => {
  return (
    <Container>
      <ImageContainer>
        <Img src={resource.image} alt={`${resource.title} logo`} />
      </ImageContainer>

      <Card title={resource.title} content={resource.summary} />

      <ButtonContainer>
        <a href={resource.link} target="_blank" rel="noreferrer">
          <Button text="Visit Resource" />
        </a>
      </ButtonContainer>
    </Container>
  );
};

export default ResourceCard;
