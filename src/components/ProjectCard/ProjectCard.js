import React from 'react';
import styled from 'styled-components';

import { Card } from '../Card/Card';
import { Img } from '../Img/Img';
import { Label } from '../Label/Label';
import { Button } from '../Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1.25rem;
  background-color: #080b1a;
  border: 1px solid #8a3ffc;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(138, 63, 252, 0.35);
`;

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    text-decoration: none;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Container>
      <ImageContainer>
        <Img src={project.image} alt={project.title} />
      </ImageContainer>

      <Card title={project.title} content={project.description} />

      <LabelContainer>
        {project.technologies.map((tech) => (
          <Label key={tech} text={tech} />
        ))}
      </LabelContainer>

      <ButtonContainer>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          <Button text="GitHub" />
        </a>
      </ButtonContainer>
    </Container>
  );
};

export default ProjectCard;
