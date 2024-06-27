// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Modal from "react-modal";
// import { Container, Header, BackButton, Title, Button, PaperList, PaperItem, PaperInfo, Icon, Form, Label, Input, Checkbox, ButtonContainer, EditButton, DeleteButton } from "./styles";
// import add from "assets/icons/add.png";

// const Admin = () => {
//   const [papers, setPapers] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [newPaper, setNewPaper] = useState({
//     author: "",
//     title: "",
//     conference: "",
//     link: "",
//     new: "",
//     selected: false,
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPapers();
//   }, []);

//   const fetchPapers = () => {
//     axios
//       .get("http://192.168.0.166:3000/api/papers")
//       .then((res) => {
//         setPapers(res.data);
//       })
//       .catch((err) => console.error("Network Error: ", err));
//   };

//   const handleChange = (e) => {
//     setNewPaper({ ...newPaper, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditMode) {
//       axios
//         .put(`http://192.168.0.166:3000/api/papers/${newPaper._id}`, newPaper)
//         .then((res) => {
//           fetchPapers();
//           closeModal();
//         })
//         .catch((err) => console.error("Network Error: ", err));
//     } else {
//       axios
//         .post("http://192.168.0.166:3000/api/papers", newPaper)
//         .then((res) => {
//           fetchPapers();
//           closeModal();
//         })
//         .catch((err) => console.error("Network Error: ", err));
//     }
//   };

//   const handleDelete = () => {
//     axios
//       .delete(`http://192.168.0.166:3000/api/papers/${newPaper._id}`)
//       .then(() => {
//         fetchPapers();
//         closeModal();
//       })
//       .catch((err) => console.error("Network Error: ", err));
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setIsEditMode(false);
//     setNewPaper({
//       author: "",
//       title: "",
//       conference: "",
//       link: "",
//       new: "",
//       selected: false,
//     });
//   };

//   const handleEdit = (paper) => {
//     setNewPaper(paper);
//     setIsEditMode(true);
//     openModal();
//   };

//   return (
//     <Container>
//       <Header>
//         <BackButton onClick={() => navigate("/")}>← Back</BackButton>
//         <Title>Manage Papers</Title>
//       </Header>
//       <Button onClick={openModal}>
//         <Icon src={add} alt="Add" />
//         Add Paper
//       </Button>
//       <PaperList>
//         {papers.map((paper) => (
//           <PaperItem key={paper._id} onClick={() => handleEdit(paper)}>
//             <PaperInfo>
//               <strong>{paper.title}</strong> by {paper.author} - {paper.conference}
//             </PaperInfo>
//           </PaperItem>
//         ))}
//       </PaperList>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Paper Modal"
//         ariaHideApp={false}
//         style={{
//           content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             width: '80%',
//             maxWidth: '800px',
//             height: 'auto'
//           },
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.75)'
//           }
//         }}
//       >
//         <Form onSubmit={handleSubmit}>
//           <Label>
//             Author
//             <Input
//               type="text"
//               name="author"
//               value={newPaper.author}
//               onChange={handleChange}
//               placeholder="Author"
//             />
//           </Label>
//           <Label>
//             Title
//             <Input
//               type="text"
//               name="title"
//               value={newPaper.title}
//               onChange={handleChange}
//               placeholder="Title"
//             />
//           </Label>
//           <Label>
//             Conference
//             <Input
//               type="text"
//               name="conference"
//               value={newPaper.conference}
//               onChange={handleChange}
//               placeholder="Conference"
//             />
//           </Label>
//           <Label>
//             Link
//             <Input
//               type="text"
//               name="link"
//               value={newPaper.link}
//               onChange={handleChange}
//               placeholder="Link"
//             />
//           </Label>
//           <Label>
//             New
//             <Input
//               type="text"
//               name="new"
//               value={newPaper.new}
//               onChange={handleChange}
//               placeholder="New"
//             />
//           </Label>
//           <Label>
//             Selected
//             <Checkbox
//               type="checkbox"
//               name="selected"
//               checked={newPaper.selected}
//               onChange={() =>
//                 setNewPaper({ ...newPaper, selected: !newPaper.selected })
//               }
//             />
//           </Label>
//           <ButtonContainer>
//             <Button type="submit">{isEditMode ? "Update" : "Add"} Paper</Button>
//             {isEditMode && (
//               <DeleteButton type="button" onClick={handleDelete}>Delete</DeleteButton>
//             )}
//             <EditButton type="button" onClick={closeModal}>Cancel</EditButton>
//           </ButtonContainer>
//         </Form>
//       </Modal>
//     </Container>
//   );
// };

// export default Admin;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Header, BackButton, Title, Nav, NavItem, NavList } from "./styles";
import { useNavigate, Outlet} from "react-router-dom";
import styled from 'styled-components';

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/")}>← Back</BackButton>
        <Title>ACE Lab Admin Page(불안해서 아직 연동 안함 마음껏 바꿔도 댐)</Title>
      </Header>
        
        <Nav>
          <NavList>
            {/* <NavItem>
              <Link to="/">홈</Link>
            </NavItem> */}
            <NavItem>
              <StyledLink to="/admin/news">뉴스</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/admin/paper">논문</StyledLink>
            </NavItem>
          </NavList>
        </Nav>
        <Outlet />
    </Container>
  );
}

export default App;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
  }
`;