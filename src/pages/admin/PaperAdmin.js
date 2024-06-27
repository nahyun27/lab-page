import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Container, Header, Button, Title, Table, ModalForm, Input, ButtonContainer, EditButton, DeleteButton, Checkbox, Label} from "./styles";

const PaperAdmin = () => {
  const [papers, setPapers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newPaper, setNewPaper] = useState({
    author: "",
    title: "",
    conference: "",
    link: "",
    new: "",
    selected: false,
  });
  const [paperToDelete, setPaperToDelete] = useState(null);

  const BASE_URL = "http://192.168.0.166:3000";

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = () => {
    axios
      .get(`${BASE_URL}/api/papers`)
      .then((res) => {
        setPapers(res.data);
      })
      .catch((err) => console.error("Network Error: ", err));
  };

  const handleChange = (e) => {
    setNewPaper({ ...newPaper, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEditMode
      ? `${BASE_URL}/api/papers/${newPaper._id}`
      : `${BASE_URL}/api/papers`;
    const method = isEditMode ? 'put' : 'post';

    axios({
      method: method,
      url: url,
      data: newPaper,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        fetchPapers();
        closeModal();
      })
      .catch((err) => console.error("Network Error: ", err));
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/api/papers/${paperToDelete}`)
      .then(() => {
        fetchPapers();
        closeDeleteModal();
      })
      .catch((err) => console.error("Network Error: ", err));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsEditMode(false);
    setNewPaper({
      author: "",
      title: "",
      conference: "",
      link: "",
      new: "",
      selected: false,
    });
  };

  const openDeleteModal = (paperId) => {
    setPaperToDelete(paperId);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setPaperToDelete(null);
  };

  const handleEdit = (paper) => {
    setNewPaper(paper);
    setIsEditMode(true);
    openModal();
  };

  return (
    <Container>
      <Header>
        <Title>Manage Papers</Title>
        <Button onClick={openModal}>Add Paper</Button>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Conference</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.conference}</td>
              <td>
                <ButtonContainer>
                  <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                  <DeleteButton onClick={() => openDeleteModal(item._id)}>Delete</DeleteButton>
                </ButtonContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Paper Modal"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            height: 'auto'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }
        }}
      >
        <ModalForm onSubmit={handleSubmit}>
          <Label>Author</Label>
          <Input type="text" name="author" value={newPaper.author} onChange={handleChange} required />
          <Label>Title</Label>
          <Input type="text" name="title" value={newPaper.title} onChange={handleChange} required />
          <Label>Conference</Label>
          <Input type="text" name="conference" value={newPaper.conference} onChange={handleChange} required />
          <Label>Link</Label>
          <Input type="text" name="link" value={newPaper.link} onChange={handleChange} required />
          <Label>New</Label>
          <Input type="text" name="new" value={newPaper.new} onChange={handleChange} required />
          <Label>Selected</Label>
          <Checkbox type="checkbox" name="selected" checked={newPaper.selected} onChange={() => setNewPaper({ ...newPaper, selected: !newPaper.selected })} />
          <ButtonContainer>
            <Button type="submit">{isEditMode ? "Update" : "Add"} Paper</Button>
            {isEditMode && <DeleteButton type="button" onClick={() => openDeleteModal(newPaper._id)}>Delete</DeleteButton>}
            <EditButton type="button" onClick={closeModal}>Cancel</EditButton>
          </ButtonContainer>
        </ModalForm>
      </Modal>

      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            maxWidth: '400px',
            height: 'auto'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }
        }}
      >
        <ModalForm>
          <Title>정말로 삭제하시겠습니까?</Title>
          <h1>Are you sure you want to delete this paper?</h1>
          <ButtonContainer>
            <DeleteButton type="button" onClick={handleDelete}>Yes, Delete</DeleteButton>
            <EditButton type="button" onClick={closeDeleteModal}>Cancel</EditButton>
          </ButtonContainer>
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default PaperAdmin;
