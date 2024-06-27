import React from 'react';
import './styles.scss';
import '../styles.scss';
import ProjectCard from './ProjectCard';
import projectInfo from './ProjectInfo';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

function Project() {
  // This data could come from an API or a local file
  return (
    <Grid className="Project">

      <div className="title-box">
        <h1><FormattedMessage id="Project" /></h1>
      </div>
      <div className="project-grid">
        {projectInfo.slice().reverse().map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Grid>
  );
}

export default Project;

const Grid = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;