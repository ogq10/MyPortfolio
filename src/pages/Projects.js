import {React, useState} from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

export default function Projects(props) {
const [projectsData, setProjectsData] = useState(ProjectsInfo)
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          
          <div className="projects__allItems">
             {projectsData.map((props) => (
              <ProjectItem
                key={props.id}
                title={props.name}
                desc={props.desc}
                img={props.img}
              />))}
          </div>

        </div>
      </ProjectStyle>
    </>
  );
}