import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {motion} from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInLeft = {
  initial:{
    x: 200,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      ease: easing,
    }
  }
};

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: 1,
      delay: 1,
      ease: easing,
    }
  }
};
  
const stagger = {
  animate:{
    transition:{
      staggerChildren: 0.15
    }
  }
};

const leftDelay = {
  initial:{
    x: 200,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      delay: 0.5,
    }
  }
};

const About = () => (
  <Section id='about' as={motion.div} exit = {{opacity:0}} initial = "initial" animate = "animate">
    <SectionDivider as={motion.div} variants={fadeInLeft} />
    <SectionTitle as={motion.h2} variants={leftDelay}>
      About
    </SectionTitle>
    <SectionText as={motion.p} variants={fadeInUp}>
      I build things, beautiful things! I'm very detail oriented and can create rich
      web applications with complex user interfaces.<br/>
      <br/>
      I have over 2 year of experience with full stack development.
      I'm competent in frameworks such as Truffle and Hardhat, as well as
      Ethereum Smart Contract Development using Soldity,<br/>
      Front-end libraries such as React and Redux.
    </SectionText>
  </Section>
);

export default About;
