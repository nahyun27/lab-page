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
          <NewsItem key={idx} item={item} idx={(currentPage - 1) * itemsPerPage + idx } onClick={onItemClick} />
        ))}
      </div>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            className="pageButton"
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
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  // margin-bottom: 5px;
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
  background-color: ${({ theme }) => theme.bgColor};
  margin: 0 5px;
  cursor: pointer;
  &::active {
    // background-color: ${({ theme }) => theme.pointColor};
    color: ${({ theme }) => theme.pointColor};
  }
  &:hover {
    // background-color: ${({ theme }) => theme.pointColor};
    color: ${({ theme }) => theme.pointColor};
    // ${({ theme }) => theme.bgColor};
  }
`;

export default NewsList;