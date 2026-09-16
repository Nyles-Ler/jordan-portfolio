import React from 'react';
import styled from 'styled-components';

import { skillGroups } from '../../data/skills';
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
  margin: 0 0 3rem;
  color: #c4c9d4;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 3.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const SkillGroup = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  height: 100%;
  background-color: #050816;
  border: 1px solid #8a3ffc;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(138, 63, 252, 0.35);
`;

const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Skills = () => {
  return (
    <Section id="skills">
      <Heading>Skills</Heading>

      <Intro>
        I have experience building responsive interfaces, full-stack
        applications, database-driven websites, resusable components, automated
        tests, and Docker-based deployments.
      </Intro>

      <Grid>
        {skillGroups.map((group) => (
          <SkillGroup key={group.title}>
            <Card title={group.title} content={group.description} />

            <LabelContainer>
              {group.skills.map((skill) => (
                <Label key={skill} text={skill} />
              ))}
            </LabelContainer>
          </SkillGroup>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
