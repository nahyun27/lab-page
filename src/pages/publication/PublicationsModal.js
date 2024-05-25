import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import PaperCard from './PaperCard';
import { ModifyModal, Backdrop } from 'components/ModifyModal';

const PublicationsModal = ({ isVisible, onHide, data, queries }) => {
  const renderBackdrop = (props) => <Backdrop {...props} />;

  return (
    <ModifyModal
      show={isVisible}
      onHide={onHide}
      backdrop={true}
      renderBackdrop={renderBackdrop}
    >
      <GrayBox>
        <div className="register_modal_header">
          <h2><FormattedMessage id="publications" /></h2>
        </div>
        <div className="card-list">
          {data.map((m, idx) => (
            <PaperCard key={idx} data={m} queries={queries} />
          ))}
        </div>
      </GrayBox>
    </ModifyModal>
  );
};

export default PublicationsModal;

const GrayBox = styled.div`
  background-color: ${({ theme }) => theme.bgColor}; 
`;
