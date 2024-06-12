import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, SubTitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { motion } from 'framer-motion';

const Projects = () => (
  <Section nomapping id='projects' as={motion.section}>
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
    }}}>Projects</SectionTitle>

    <GridContainer >
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard as={motion.div} key = {id} className="card" whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: 1.04,
          transition: {
            duration: .4
          }
          }} initial={{
          y: 60,
          opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition:{
              duration: 0.5,
              delay: 0.2,
          }}}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <SubTitleContent>Stack</SubTitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target = "_blank">Repo</ExternalLinks>
            <ExternalLinks href={source} target = "_blank">Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;