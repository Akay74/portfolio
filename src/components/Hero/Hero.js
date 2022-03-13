import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, TitleSubText, SmallHeroText } from './HeroStyles';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: 0.5
    }
  }
};
  
const stagger = {
  animate:{
    transition:{
      staggerChildren: 0.1
    }
  }
};

const Hero = (props) => (
  <Section as={motion.div} row nopadding exit = {{opacity:0}} initial = "initial" animate = "animate">
    <LeftSection as={motion.div} variants={stagger}>
      <SmallHeroText as={motion.div} variants = {fadeInUp}>Hello, I am</SmallHeroText>
      <SectionTitle as={motion.div} main center variants = {fadeInUp}>
        DAVIK
      </SectionTitle>
      <TitleSubText as={motion.p} variants = {fadeInUp}>FullStack Smart Contract Engineer</TitleSubText><br/>
      <SectionText as={motion.p} variants = {fadeInUp}>
        I am a Frontend Web developer building reactive and responsive Web apps using ReactJs. <br/>
        I also build DApps using ReactJs/Solidity.
      </SectionText><br/>
      <motion.div variants = {fadeInUp}>
        <Button onClick={() => window.location = 'mailto:akaudeh@gmail.com'}>Contact Me</Button>
      </motion.div>
      
    </LeftSection>
  </Section>
);

export default Hero;