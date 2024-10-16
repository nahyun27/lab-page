import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Container, Header, Button, Title, Table, ModalForm, Input, ButtonContainer, EditButton, DeleteButton, ImagePreview } from "./styles";

const NewsAdmin = () => {
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newNews, setNewNews] = useState({
    title: "",
    date: "",
    contents: "",
    image: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [newsToDelete, setNewsToDelete] = useState(null);

  const BASE_URL = "https://192.168.0.166:443";
  // const BASE_URL = "https://166.104.245.67:443";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    axios
      .get(`${BASE_URL}/api/news`)
      .then((res) => setNews(res.data))
      .catch((err) => console.error("Network Error: ", err));
  };

  useEffect(() => {
    if (isEditMode && newNews.image) {
      setPreview(`${BASE_URL}${newNews.image}`);
    }
  }, [isEditMode, newNews.image]);

  const handleChange = (e) => {
    setNewNews({ ...newNews, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newNews.title);
    formData.append('date', newNews.date);
    formData.append('contents', newNews.contents);
    if (selectedFile) {
      formData.append('image', selectedFile);
    } else {
      formData.append('image', newNews.image);
    }

    const url = isEditMode
      ? `${BASE_URL}/api/news/${newNews._id}`
      : `${BASE_URL}/api/news`;
    const method = isEditMode ? 'put' : 'post';
    const userData = {
      method: method,
      url: url,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    axios(userData)
      .then((res) => {
        fetchNews();
        closeModal();
      })
      .catch((err) => console.error("Network Error: ", err));
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/api/news/${newsToDelete}`)
      .then(() => {
        fetchNews();
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
    setNewNews({
      title: "",
      date: "",
      contents: "",
      image: "",
    });
    setSelectedFile(null);
    setPreview("");
  };

  const openDeleteModal = (newsId) => {
    setNewsToDelete(newsId);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setNewsToDelete(null);
  };

  const handleEdit = (news) => {
    setNewNews(news);
    setIsEditMode(true);
    setPreview(news.image);
    openModal();
  };

  return (
    <Container>
      <Header>
        <Title>Manage News</Title>
        <Button onClick={openModal}>Add News</Button>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
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
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            height: 'auto',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <ModalForm onSubmit={handleSubmit}>
          <label>Title</label>
          <Input type="text" name="title" value={newNews.title} onChange={handleChange} required />
          <label>Date</label>
          <Input type="text" name="date" value={newNews.date} onChange={handleChange} required />
          <label>Contents</label>
          <Input type="text" name="contents" value={newNews.contents} onChange={handleChange} required />
          <label>Image</label>
          <Input type="file" onChange={handleFileChange} />
          {preview && <ImagePreview src={preview} alt="Preview" />}
          <ButtonContainer>
            <Button type="submit">{isEditMode ? "Update" : "Add"} News</Button>
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
            height: 'auto',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <ModalForm>
          <Title>Are you sure you want to delete this news item?</Title>
          <ButtonContainer>
            <DeleteButton type="button" onClick={handleDelete}>Yes, Delete</DeleteButton>
            <EditButton type="button" onClick={closeDeleteModal}>Cancel</EditButton>
          </ButtonContainer>
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default NewsAdmin;
