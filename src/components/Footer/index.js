import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../../layout/Container';
import { itemsFour, itemsOne, itemsThree, itemsTwo } from './footerItem';

const FooterContent = styled('div')`
  background-color: #032541;
  padding: 40px 0;
  display: flex;
`;

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const FooterLeft = styled('div')`
  display: flex;
  /* align-items: flex-end; */
  flex-direction: column;
`;

const FooterLogo = styled('a')``;

const FooterLogoImg = styled('img')`
  width: 130px;
  height: 95px;
  object-fit: cover;
  margin-bottom: 1em;
`;

const FooterLeftBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  color: rgb(1, 180, 228);
  font-size: 18px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  background: #fff;
  cursor: pointer;
  border: none;
  text-decoration: none;
`;

const FooterRight = styled('div')`
  display: flex;
  gap: 3em;
`;

const FooterItemOne = styled('div')``;

const FooterItemTwo = styled('div')``;

const FooterItemThree = styled('div')``;

const FooterItemFour = styled('div')``;

const FooterRightList = styled('ul')`
  list-style: none;

  & li {
    margin-bottom: 0.3em;

    &:nth-child(1) {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

const FooterRightListLink = styled('a')`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContent>
      <FooterContainer>
        <FooterLeft>
          <FooterLogo href="/">
            <FooterLogoImg
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="The Movie DB Logo"
            />
          </FooterLogo>
          <FooterLeftBtn as={Link} to={'/signup'}>
            join the community
          </FooterLeftBtn>
        </FooterLeft>
        <FooterRight>
          <FooterItemOne>
            <FooterRightList>
              {itemsOne.map((item) => (
                <li key={item}>
                  <FooterRightListLink href="#!">{item}</FooterRightListLink>
                </li>
              ))}
            </FooterRightList>
          </FooterItemOne>
          <FooterItemTwo>
            <FooterRightList>
              {itemsTwo.map((item) => (
                <li key={item}>
                  <FooterRightListLink href="#!">{item}</FooterRightListLink>
                </li>
              ))}
            </FooterRightList>
          </FooterItemTwo>
          <FooterItemThree>
            <FooterRightList>
              {itemsThree.map((item) => (
                <li key={item}>
                  <FooterRightListLink href="#!">{item}</FooterRightListLink>
                </li>
              ))}
            </FooterRightList>
          </FooterItemThree>
          <FooterItemFour>
            <FooterRightList>
              {itemsFour.map((item) => (
                <li key={item}>
                  <FooterRightListLink href="#!">{item}</FooterRightListLink>
                </li>
              ))}
            </FooterRightList>
          </FooterItemFour>
        </FooterRight>
      </FooterContainer>
    </FooterContent>
  );
};

export default Footer;
