import React from 'react';
import { AiFillGithub, AiOutlineWhatsApp, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348164497136">+234 816 4497 136</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="akaudeh@gmail.com">
            akaudeh@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialContainer>
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
