import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Comment = ({ data }) => {
  return (
    <li key={data.id}>
      <figure>
        <img src={data.author.avatar} alt={data.author.name} />
      </figure>
      <p>
        <span>{data.author.name}</span>
        {data.content}
      </p>
    </li>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    content: PropTypes.string,
  }),
};

export default Comment;
