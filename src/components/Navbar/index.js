import React from 'react';
import styled from 'styled-components';
import { Plus, Search } from 'react-feather';
import Container from '../../layout/Container';
import { Link } from 'react-router-dom';
import { UncontrolledPopover, Button, PopoverHeader, PopoverBody } from 'reactstrap';
const Header = styled('header')`
  font-family: sans-serif;
  background-color: #032541;
`;

const ContainerItems = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled('img')`
  width: fit-content;
  height: 20px;
`;

const Content = styled('div')`
  display: flex;
  align-items: center;
`;

const H5 = styled('h5')`
  margin: 0 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

const Content2 = styled('div')`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-around;
`;

const LngButton = styled('button')`
  border: 0.5px solid white;
  cursor: pointer;
  background: none;
  border-radius: 3px;
  color: white;
  font-size: 10px;
  margin: 0 1rem;
  padding: 5px;
  &:hover {
    background-color: white;
    color: black;
    transition: all 0.2s;
  }
`;
const PopUpBody = styled('PopoverBody')`
  background-color: white;
  font-size: 1em;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 0.25rem;
  padding: 1rem;
  width: 50px;
`;
const ControlledPopUp = styled(UncontrolledPopover)`
  width: 100px;
`;

const Navbar = () => {
  return (
    <Header>
      <ContainerItems>
        <Content>
          <Link to={'/'}>
            <Img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
            />
          </Link>
          <H5>Movies</H5>
          <H5>TV Shows</H5>
          <H5>People</H5>
          <H5>More</H5>
        </Content>
        <Content2>
          <Plus color="white" cursor="pointer" id="UncontrolledPopover" type="button" />
          <ControlledPopUp placement="bottom" target="UncontrolledPopover">
            <PopUpBody>Can't find a movie or TV show? Login to create it.</PopUpBody>
          </ControlledPopUp>

          <LngButton>EN</LngButton>
          <Link to={'/login'}>
            <H5>Login</H5>
          </Link>
          <H5 as={Link} to={'/signup'}>
            Join TMDB
          </H5>
          <Search
            color="rgba(0, 173, 255, 0.8)"
            style={{ marginLeft: '1.5rem', cursor: 'pointer' }}
          />
        </Content2>
      </ContainerItems>
    </Header>
  );
};

export default Navbar;
