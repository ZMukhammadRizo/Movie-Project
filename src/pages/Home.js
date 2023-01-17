import React from 'react';
import Search from '../components/Search';
import Information from '../components/Information';
import WrapBanner from "../components/That's a Wrap/Banner";

const Home = () => {
  return (
    <>
      <Search />
      <Information />
      <WrapBanner />
    </>
  );
};

export default Home;
