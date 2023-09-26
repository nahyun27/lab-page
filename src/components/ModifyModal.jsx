import Modal from 'react-overlays/Modal'
import styled from "styled-components";

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.7;
`;

const ModifyModal = styled(Modal)`
  position: fixed;
  width: max-content;
  max-height: 80%;
  z-index: 1040;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  
`;

export {Backdrop, ModifyModal}