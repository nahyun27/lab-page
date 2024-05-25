import React from 'react';
import '../styles.scss';

const HighlightText = ({ text, queries }) => {
  if (typeof text !== 'string') {
    console.error("The text parameter should be a string.");
    return text;
  }

  if (!Array.isArray(queries)) {
    console.error("The queries parameter should be an array.");
    return text;
  }

  if (queries.length === 0) {
    return text;
  }

  // Create a combined regex pattern from all queries
  const pattern = queries.join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        queries.some(query => query.toLowerCase() === part.toLowerCase()) ? (
          <span key={index} >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightText;
