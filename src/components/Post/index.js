import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Comment from '../Comment';

const Post = ({ data }) => {
  return (
    <li className="post">
      <section>
        <figure>
          <img src={data.author.avatar} alt={data.author.name} />
        </figure>
        <div>
          <span>{data.author.name}</span>
          <small>{data.date}</small>
        </div>
        <p>{data.content}</p>
      </section>
      <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    date: PropTypes.date,
    content: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
        }),
        content: PropTypes.string,
      })
    ),
  }),
};

export default Post;
