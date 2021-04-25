import React from 'react';
import PropTypes from 'prop-types';
import style from './content.css';

const Content = ({ children }) => {
  return <main className={style.content}>{children}</main>;
};

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Content;
