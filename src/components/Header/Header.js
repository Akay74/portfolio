import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, Anchor, NavLink, Span, SocialIcons } from './HeaderStyles';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial:{
      y: -70,
      opacity: 0
    },
    animate:{
      y: 0,
      opacity: 1,
      transition:{
        delay: 1.2,
        duration: 0.8,
      }
    }
  };

const Header = (props) =>  (
  // working with styled components
  <Container as={motion.div} exit = {{opacity:0}} initial = "initial" animate = "animate">

    <Div1>
      <Link href="/">
        <Anchor>
          <Span>Akay™</Span>
        </Anchor>
      </Link>
    </Div1>

    <Div2 as={motion.div} >
      <motion.li initial={{
      y: -60,
      opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition:{
          duration: 0.5,
          delay: 1.0,
      }}}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </motion.li>

      <motion.li initial={{
      y: -60,
      opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition:{
          duration: 0.5,
          delay: 1.2,
      }}}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </motion.li>

      <motion.li initial={{
      y: -60,
      opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition:{
          duration: 0.5,
          delay: 1.4,
      }}}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </motion.li>

    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/Akay74' target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://wa.me/+2348183969173' target='_blank'>
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://twitter.com/alpha_godhand' target='_blank'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
