import React from 'react';
import styled from 'styled-components';

import { resources } from '../../data/resources';
import ResourceCard from '../../components/ResourceCard/ResourceCard';

const Section = styled.section`
  padding: 6rem 8%;
  background-color: #050816;
  color: #f5f5f5;
`;

const Heading = styled.h2`
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 5vw, 4rem);
`;

const Intro = styled.p`
  width: 100%;
  margin: 0 0 3.5rem;
  color: #c4c9d4;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Resources = () => {
  return (
    <Section id="resources">
      <Heading>Resources</Heading>

      <Intro>
        These are the documentation sites, tutorials, and learning platforms I
        regularly use to learn new technologies, troubleshoot issues, and
        improve my projects.
      </Intro>

      <Grid>
        {resources.map((resource) => (
          <ResourceCard key={resource.title} resource={resource} />
        ))}
      </Grid>
    </Section>
  );
};

export default Resources;
