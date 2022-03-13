import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { motion } from 'framer-motion';

const Projects = () => (
  <Section nomapping id='projects'>
    <SectionDivider/>

    <SectionTitle>Projects</SectionTitle>

    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard as={motion.div} key = {id} className="card" whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: 1.04,
          transition: {
            duration: .4
          }
        }}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
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