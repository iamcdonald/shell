import React from 'react';
import PropTypes from 'prop-types';
import style from './page.scss';
import Header from './Header';
import Content from './Content';

const Page = ({ children }) => {
  return (
    <div className={style.page}>
      <Header />
      <Content>
        {children}
      </Content>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Page;
