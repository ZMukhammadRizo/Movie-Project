import React from "react";
import styled from "styled-components";
import { Plus, Search } from "react-feather";

import Container from "../../layout/Container";

const Header = styled("header")`
  font-family: sans-serif;
  background-color: #032541;
`;

const ContainerItems = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled("img")`
  width: fit-content;
  height: 20px;
`;

const Content = styled("div")`
  display: flex;
  align-items: center;
`;

const H5 = styled("h5")`
  margin: 0 1rem;
  color: white;
  cursor: pointer;
`;

const Content2 = styled("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-around;
`;

const Button = styled("button")`
  border-color: white;
  cursor: pointer;
  background: none;
  border-radius: 5px;
  color: white;
  margin: 0 1rem;
  padding: 5px;
  &:hover {
    background-color: white;
    color: black;
    transition: all 0.5s;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <ContainerItems>
        <Content>
          <Img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="The Movie DB Logo"
          />
          <H5>Фильмы</H5>
          <H5>Сериалы</H5>
          <H5>Люди</H5>
          <H5>Ещё</H5>
        </Content>
        <Content2>
          <Plus color="white" />
          <Button>RU</Button>
          <H5>Войти</H5>
          <H5>Присоединиться к TMDB</H5>
          <Search color="aquamarine" style={{ marginLeft: "1.5rem" }} />
        </Content2>
      </ContainerItems>
    </Header>
  );
};

export default Navbar;
