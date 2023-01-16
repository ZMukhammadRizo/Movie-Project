import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../../layout/Container';

const LogInContainer = styled(Container)`
  margin: auto;
  @media (max-width: 1450px) {
    margin: 2rem;
  }
`;
const Header = styled('h2')`
  margin: 2rem 0 0 0;
  font-size: 1.5em;
`;

const Texts = styled('p')`
  font-size: 16px;
  margin: 1rem 0;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.background.tmdbLightBlue};
`;

const Inputs = styled('div')`
  margin: 2rem 0;
`;

const InputLabel = styled('label')`
  font-size: 16px;
`;

const Input = styled('input')`
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.background.lightGrey};
  color: #495057;
  border-radius: 0.25rem;
`;

const Button = styled('button')`
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
  border: none;
  padding: 6px 19px;
  font-weight: 700;
  font-size: 17px;
  border-radius: ${({ theme }) => theme.borderRadius.imageBorderRadius};
  color: #fff;
  background-color: ${({ theme }) => theme.background.accountLightBlue};
  &:hover {
    background-color: black;
    transition: all 0.8s;
  }
`;

const Button2 = styled('button')`
  text-decoration: none;
  margin-left: 0;
  border: none;
  font-size: 16px;
  background: none;
  color: ${({ theme }) => theme.background.accountLightBlue};
`;

const LogIn = () => {
  return (
    <LogInContainer>
      <Header>Login to your account</Header>
      <Texts>
        In order to use the editing and rating capabilities of TMDB, as well as get personal
        recommendations you will need to login to your account. If you do not have an account,
        registering for an account is free and simple.
        <LinkTo to={'/signup'}> Click here </LinkTo>
        to get started.
      </Texts>
      <Texts>
        If you signed up but didn't get your verification email,{' '}
        <LinkTo to={'/resend-email-verification'}>click here</LinkTo> to have it resent.
      </Texts>
      <Inputs>
        <InputLabel>
          Username
          <Input type={'text'} />
        </InputLabel>
        <InputLabel>
          Password
          <Input type={'password'} />
        </InputLabel>
      </Inputs>
      <Button>Login</Button>
      <Button2 as={Link} to={'/reset-password'}>
        Reset Password
      </Button2>
    </LogInContainer>
  );
};

export default LogIn;
