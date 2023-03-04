import React from 'react';
import Layout from 'layouts/layout';

export default function home() {
  const navList = [
    {
      icon: false,
      name: 'about us',
    },
    {
      icon: false,
      name: 'our communities',
    },
    {
      icon: false,
      name: 'election data',
    },
    {
      icon: false,
      name: 'e-buddy',
    },
    {
      icon: false,
      name: 'veo platform',
    },
  ];
  return (
    <>
      <Layout navList={navList}>
        <div className="container">Home</div>
      </Layout>
    </>
  );
}
