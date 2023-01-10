import React from 'react';
import Container from '../../layout/Container';
import styled from 'styled-components';
import { ulItems } from './constants/items';
import { Link } from 'react-router-dom';

const Info = styled(Container)`
  background-image: url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg');
  color: white;
  background-position: top;
  background-size: cover;
  padding: 30px 40px;
`;
const H1 = styled('h1')``;
const Content = styled('div')`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
const P = styled('p')`
  font-size: 19.2px;
  width: 65%;
  max-width: 88vh;
  line-height: 1.5;
`;

const Ul = styled('ul')`
  width: 35%;
  opacity: 0.8;
  max-width: 400px;
`;
const Li = styled('li')``;
const Button = styled('button')`
  padding: 8px 16px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.background.accountPurple};
`;

const Information = () => {
  return (
    <Info>
      <H1>Join Today</H1>
      <Content>
        <P>
          Get access to maintain your own custom personal lists, track what you've seen and search
          and filter for what to watch next — regardless if it's in theatres, on TV or available on
          popular streaming services like Netflix, Amazon Prime Video, Disney Plus, and Apple TV
          Plus.
        </P>
        <Ul>
          {ulItems.map(({ text }) => (
            <Li key={text}>{text}</Li>
          ))}
        </Ul>
      </Content>
      <Button as={Link} to={'/signup'}>
        Sign Up
      </Button>
    </Info>
  );
};

export default Information;
