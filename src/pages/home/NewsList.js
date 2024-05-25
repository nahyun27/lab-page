import React, { useState } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import './styles.scss';

const NewsList = ({ newsData, onItemClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  return (
    <NewsBox className="news">
      <Title>🤗 ACE NEWS 🤗</Title>
      <div className="card-list">
        {currentItems.map((item, idx) => (
          <NewsItem key={idx} item={item} idx={idx} onClick={onItemClick} />
        ))}
      </div>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            isActive={index + 1 === currentPage}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </NewsBox>
  );
};

const NewsBox = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  padding: 20px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const PageButton = styled.button`
  // background-color: ${({ theme, isActive }) => (isActive ? theme.pointColor : theme.bgColor)};
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  border-radius: 10px;
  border-width: 0px ;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    // background-color: ${({ theme }) => theme.pointColor};
    color: ${({ theme }) => theme.pointColor};
    // ${({ theme }) => theme.bgColor};
  }
`;

export default NewsList;