import React from 'react';
import styled from 'styled-components';

import { setupGroups } from '../../data/setup';
import { Card } from '../../components/Card/Card';
import { Label } from '../../components/Label/Label';

const Section = styled.section`
  padding: 6rem 8%;
  background-color: #080b1a;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SetupGroup = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
  padding: 1.25;
  background-color: #050816;
  border: 1 px solid #8a3ffc;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(138, 63, 252, 0.35);
  transition: all 0.3s ease;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Setup = () => {
  return (
    <Section id="setup">
      <Heading>Developer Setup</Heading>

      <Intro>
        My development environment is built around tools that help me write,
        test, debug, organize, and deploy full-stack applications efficiently.
      </Intro>

      <Grid>
        {setupGroups.map((group) => (
          <SetupGroup key={group.title}>
            <Card title={group.title} content={group.description} />

            <LabelContainer>
              {group.items.map((item) => (
                <Label key={item} text={item} />
              ))}
            </LabelContainer>
          </SetupGroup>
        ))}
      </Grid>
    </Section>
  );
};

export default Setup;
