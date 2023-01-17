import React from 'react';
import styled from 'styled-components';
import Container from '../../layout/Container';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

const WrapContainer = styled(Container)`
  background-image: url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg');
  width: 100%;
  background-position: center;
  min-height: 350px;
  padding: 30px 40px;
  color: white;
  z-index: 1;
  position: relative;
`;
const Content = styled('div')`
  z-index: 2;
`;

const Title = styled('h2')`
  font-size: 60px;
  display: inline-block;
  text-transform: uppercase;
  display: inline-block;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background: #fff;
  }
`;

const Text = styled('p')`
  font-size: 20px;
  padding: 1rem 0;
`;
const Button = styled('button')`
  cursor: pointer;
  display: flex;
  align-content: center;
  font-size: 16px;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
  background: none;
  text-decoration: none;
`;
const BgColor = styled('div')`
  background-color: rgba(45, 28, 111, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -10;
`;
const WrapBanner = () => {
  return (
    <WrapContainer>
      <Content>
        <Title>
          That's a <br /> Wrap 2022
        </Title>
        <Text>The best (and worst) from 2022.</Text>
        <Link to={'/2022'}>
          <Button>
            Check it out <ArrowRight size={20} />
          </Button>
        </Link>
      </Content>
      <BgColor></BgColor>
    </WrapContainer>
  );
};

export default WrapBanner;
