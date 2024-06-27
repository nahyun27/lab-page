import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Header, BackButton, Title, Nav, NavItem, NavList } from "./styles";
import styled from 'styled-components';
import { useAuth } from 'AuthContext';

function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleBack = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>← Back</BackButton>
        <Title>ACE Lab Admin Page(불안해서 아직 연동 안함 마음껏 바꿔도 댐)</Title>
      </Header>
        
        <Nav>
          <NavList>
            <NavItem>
              <StyledLink to="news">뉴스</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="paper">논문</StyledLink>
            </NavItem>
          </NavList>
        </Nav>
        <Outlet />
    </Container>
  );
}

export default Admin;

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
