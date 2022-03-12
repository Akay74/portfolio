import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => (
  <Section id='about'>
    <SectionDivider/>
    <SectionTitle>
      About
    </SectionTitle>
    <SectionText>
      I build things, beautiful things! I'm very detail oriented and can create rich
      web applications with complex user interfaces.<br/>
      <br/>
      I have over 2 year of experience with full stack development.
      I'm competent in frameworks such as Truffle and Hardhat,<br/>
      <br/>
      Ethereum Smart Contract Development using Soldity,<br/>
      Front-enc libraries such as React and Redux.
    </SectionText>
  </Section>
);

export default About;
