import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {motion} from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];



const About = () => (
  <Section id='about' as={motion.div} exit = {{opacity:0}} initial = "initial" animate = "animate">
    <SectionDivider as={motion.div}   initial = {{
    x: 200,
    opacity: 0
    }} whileInView={{ x: 0,
    opacity: 1,
    transition:{
      duration: 0.5
    }}} />

    <SectionTitle as={motion.h2} initial = {{
    x: 200,
    opacity: 0
    }} whileInView={{ x: 0,
    opacity: 1,
    transition:{
      duration: 0.5,
      delay: 0.3
    }}}>
      About
    </SectionTitle>

    <SectionText as={motion.p} initial={{
    y: 60,
    opacity: 0
    }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition:{
        duration: 0.7,
        delay: 0.8,
      }}}
    >
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
