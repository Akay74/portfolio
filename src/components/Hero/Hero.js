import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, TitleSubText, SmallHeroText } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SmallHeroText>Hello, I am</SmallHeroText>
      <SectionTitle main center>
      DAVIK
      </SectionTitle>
      <TitleSubText>FullStack Smart Contract Engineer</TitleSubText><br/>
      <SectionText>
        I am a Frontend Web develop building reactive and responsive Web apps using ReactJs. <br/>
        I also build DApps using ReactJs/Solidity.
      </SectionText>
      <Button>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;