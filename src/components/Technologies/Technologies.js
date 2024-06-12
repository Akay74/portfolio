import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiEthereum} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { motion } from 'framer-motion';

const stagger = {
  animate:{
    transition:{
      staggerChildren: 0.1
    }
  }
};

const Technologies = () =>  (
  <Section id='tech' as={motion.section} initial="initial" animate="animate">
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
    }}}>Tech Stack</SectionTitle>

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
      }}}>
      I've worked with a few technologies in the web2 and web3 development field.<br/>
      Some of the tools I'm familiar with include:
    </SectionText>

    <List as={motion.ul} transition={{staggerChildren: 0.1}}>

      <ListItem as={motion.li} initial = {{
      x: -50,
      opacity: 0
      }} whileInView={{ x: 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        delay: 0.5
      }}}>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML/CSS <br/>
            Bootstrap <br/>
            SASS/SCSS <br/>
            TailwindCSS<br/>
            JavaScript/TypeScript<br/>
            ReactJs<br/>
            VueJs<br/>
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem as={motion.li} initial = {{
      x: -50,
      opacity: 0
      }} whileInView={{ x: 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        delay: 0.7
      }}}>
        <DiFirebase size="5rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br/>
            NodeJs<br/>
            Express<br/>
            NestJs<br/>
            Firebase<br/>
            MongoDB<br/>

          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem as={motion.li} initial = {{
      x: -50,
      opacity: 0
      }} whileInView={{ x: 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        delay: 0.9
      }}}>
        <SiEthereum size="5rem" />
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Solidity<br/>
            Foundry<br/>
            Hardhat<br/>
            Slither
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
