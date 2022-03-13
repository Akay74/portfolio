import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, Anchor, NavLink, Span, SocialIcons } from './HeaderStyles';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial:{
      y: 90,
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
  
  const stagger = {
    animate:{
      transition:{
        staggerChildren: 0.3
      }
    }
  };

const Header = (props) =>  (
  // working with styled components
  <Container as={motion.div} exit = {{opacity:0}} initial = "initial" animate = "animate">

    <Div1>
      <Link href="/">
        <Anchor>
          <Span>DAVIK™</Span>
        </Anchor>
      </Link>
    </Div1>

    <Div2 as={motion.div} variants={stagger}>
      <motion.li variants={fadeInUp}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </motion.li>

      <motion.li variants={fadeInUp}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </motion.li>

      <motion.li variants={fadeInUp}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </motion.li>

    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/Akay74' target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://wa.me/+2348164497136' target='_blank'>
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://twitter.com/alpha_godhand' target='_blank'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
