import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, TitleSubText, SmallHeroText } from './HeroStyles';
import { motion } from 'framer-motion';

const Hero = (props) => (
  <Section as={motion.div} row nopadding exit = {{opacity:0}} initial = "initial" animate = "whileInView">
    <LeftSection as={motion.div}>
      <SmallHeroText as={motion.p} initial={{
      opacity: 0
      }}
      whileInView={{
        opacity: 1,
        transition:{
          duration: 0.6,
          delay: 0.2,
      }}}>Hello, I am</SmallHeroText>

      <SectionTitle as={motion.div} main center initial={{
      x: -80,
      opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition:{
          duration: 0.7,
          delay: 0.8,
          type: "spring"
      }}}>
        Akay
      </SectionTitle>

      <TitleSubText as={motion.p} initial={{
      opacity: 0
      }}
      whileInView={{
        opacity: 1,
        transition:{
          duration: 0.5,
          delay: 1.2,
      }}}>FullStack Engineer</TitleSubText><br/>

      <SectionText as={motion.p} initial={{
      y: 60,
      opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition:{
          duration: 0.7,
          delay: 1.3,
      }}}>
        I am a fullstack engineer building reactive and responsive web2, web3 and native secure applications. <br/>
      </SectionText><br/>

      <motion.div>
        <Button onClick={() => window.location = 'mailto:akaudeh@gmail.com'}>Contact Me</Button>
      </motion.div>
      
    </LeftSection>
  </Section>
);

export default Hero;