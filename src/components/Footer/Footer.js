import React from 'react';
import { AiFillGithub, AiOutlineWhatsApp, AiFillTwitterCircle } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <FooterWrapper as={motion.section}>
      <LinkList as={motion.section}>
        <LinkColumn as={motion.div} initial={{
        x: -60,
        opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition:{
            duration: 0.7,
            delay: 0.2,
        }}}>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348164497136">+234 816 4497 136</LinkItem>
        </LinkColumn>

        <LinkColumn as={motion.div} initial={{
          x: -60,
          opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition:{
              duration: 0.7,
              delay: 0.4,
          }}}>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:akaudeh@gmail.com'>
            akaudeh@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>

        <CompanyContainer as={motion.div} initial={{
        x: -60,
        opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition:{
            duration: 0.7,
            delay: 0.6,
        }}}>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialContainer as={motion.div} initial={{
        y: 60,
        opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition:{
            duration: 0.5,
            delay: 0.8
          }}}>
          <SocialIcons href="https://github.com/Akay74" target='_blank'>
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://wa.me/+2348164497136" target='_blank'>
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://twitter.com/alpha_godhand" target='_blank'>
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
