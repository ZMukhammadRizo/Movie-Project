import React from 'react';
import styled from 'styled-components';
import Container from '../../layout/Container';
import img from './images/image.jpg';

const SearchContainer = styled('div')`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  color: white;
  position: relative;
`;

const Content = styled('div')`
  padding: 4rem;
`;
const H1 = styled('h1')`
  font-size: 50px;
`;
const H3 = styled('h3')`
  font-size: 30px;
`;
const SearchBar = styled('input')`
  padding: 1rem;
  border-radius: 20px 0 0 20px;
  border: none;
  flex-grow: 1;
  outline: none;
`;

const Button = styled('button')`
  border: none;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
  font-size: 20px;
  width: 100px;
  padding: 0.8rem;
  color: white;
  background: linear-gradient(90deg, rgba(30, 213, 169, 1) 35%, rgba(1, 180, 228, 1) 100%);
  &:hover {
    color: ${({ theme }) => theme.background.darkBlue};
  }
`;
const SearchContent = styled('form')`
  margin-top: 1.5rem;
  width: 100%;
  height: 3.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 30px;
`;

const Search = () => {
  return (
    <Container>
      <SearchContainer id="searchContainer">
        <Content>
          <H1>Welcome.</H1>
          <H3>Millions of movies, TV shows and people to discover. Explore now.</H3>
          <SearchContent>
            <SearchBar
              type={'search'}
              placeholder="Search for a movie, tv show, person"
            ></SearchBar>
            <Button>Search</Button>
          </SearchContent>
        </Content>
      </SearchContainer>
    </Container>
  );
};

export default Search;
