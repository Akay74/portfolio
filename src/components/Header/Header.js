import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Anchor, NavLink, Span, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  // working with styled components
  <Container>

    <Div1>
      <Link href="/">
        <Anchor>
          <Span>DAVIK™</Span>
        </Anchor>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

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
