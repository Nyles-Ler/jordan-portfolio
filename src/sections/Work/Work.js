import React from 'react';
import styled from 'styled-components';

import { projects } from '../../data/projects';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Section = styled.section`
  background: #050816;
  padding: 6rem 8%;
`;

const Heading = styled.h2`
  color: white;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
`;

const Intro = styled.p`
  max-width: 1000px;
  margin: -2rem 0 3rem;
  color: #c4c9d4;
  font-size: 1.05;
  line-height: 1.7;
`;

const Work = () => {
  return (
    <Section id="work">
      <Heading>Featured Projects</Heading>

      <Intro>
        A selection of full-stack, front-end, and development workflow projects
        completed throughout my program.
      </Intro>

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Grid>
    </Section>
  );
};

export default Work;
