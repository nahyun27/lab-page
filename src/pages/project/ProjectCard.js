import React, { useState } from 'react';
import './styles.scss'; // This will be your styles
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Backdrop, ModifyModal } from '../../components/ModifyModal';

function ProjectCard({project}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const renderBackdrop = (props) => <Backdrop {...props} />;
  return (
    <>
      <Card  onClick={()=>setIsModalVisible(true)} className="project-card">
        {/* <img src={image} alt="Project" /> */}
        <div className="project-info">
          <span className={"status " + (project.status==='완료'? 'blue' : project.status==='수행중'? 'red' : project.status==='신청'? 'green' : 'purple')}>{project.status}</span>
          <h3>{project.research_project_title}</h3>
          <p>{project.yesr}</p>
          <p><FormattedMessage id={project.research_summary} /></p>
        </div>
        <p className="date">📅 {project.research_period}</p>
      </Card>
      <ModifyModal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        backdrop={true}
        renderBackdrop={renderBackdrop}
      >
        <GrayBox2 className='textBox'>
          <div className="register_modal_header">
            <h2>연구과제</h2>
          </div>
          <div className='newsBox'>
            <NewsModalBox className="textBox">
              <p className="title"><FormattedMessage id={project.research_project_title} /></p>
              <GrayText className="date"> {project.research_period}</GrayText>
              <p className="contents"><FormattedMessage id={project.research_summary} /></p>
              {project.image &&
                <img className='newsImg' src={project.image} alt="" />}
                <div className="table-container ">
                  <table className="project-table">
                    <tbody>
                      <tr>
                        <td className="contents attribute-name">Year/Month</td>
                        <td className="contents">{project.year}/{project.month}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Managing Department</td>
                        <td className="contents">{project.managing_department}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Support Agency</td>
                        <td className="contents">{project.support_agency}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Cooperative Agency</td>
                        <td className="contents">{project.cooperative_agency}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Project Details</td>
                        <td className="contents">{project.project_details}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Research Project Title</td>
                        <td className="contents">{project.research_project_title}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Leading Research Agency</td>
                        <td className="contents">{project.leading_research_agency}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Current Affiliation</td>
                        <td className="contents">{project.current_affiliation}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Research Period</td>
                        <td className="contents">{project.research_period}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Status</td>
                        <td className="contents">{project.status}</td>
                      </tr>
                      {/* <tr>
                        <td className="contents attribute-name">Total Project Duration</td>
                        <td className="contents">{project.total_project_duration}</td>
                      </tr> */}
                      {/* <tr>
                        <td className="contents attribute-name">Total Research Funding</td>
                        <td className="contents">{project.total_research_funding}</td>
                      </tr>
                      <tr>
                        <td className="contents attribute-name">Cumulative Deposit Amount</td>
                        <td className="contents">{project.cumulative_deposit_amount}</td>
                      </tr> */}
                      {/* <tr>
                        <td className="contents attribute-name">Category</td>
                        <td className="contents">{project.category}</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
            </NewsModalBox>
          </div>
        </GrayBox2>
      </ModifyModal>
      </>
  );
}

export default ProjectCard;


const BgDiv = styled.div`
  // background-color: ${({ theme }) => theme.bgColor};
`;
const NewsModalBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const GrayText = styled.div`
  color: ${({ theme }) => theme.grayColor};
`;

const GrayBox2 = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;

const PointBox = styled.button`
  background-color: ${({ theme }) => theme.pointColor};
  `;

const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;