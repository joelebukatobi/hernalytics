import React from 'react';
// Components
import Navbar from 'layouts/navbar';
import Header from 'layouts/header';
import Footer from 'layouts/footer';
import Wrapper from 'layouts/wrapper';
export default function layout({ children, className, navList }) {
  return (
    <Wrapper>
      <Navbar navList={navList} />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}
