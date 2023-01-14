import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../../../layout/Container';

const Header = styled('h2')`
  font-size: 24px;
  padding: 0.7rem 0;
`;

const Content = styled('div')`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  padding: 30px 40px;
`;

const Text = styled('p')`
  margin-bottom: 2rem;
`;

const InputLabel = styled('label')`
  font-size: 16px;
`;

const Input = styled('input')`
  margin-bottom: 2rem;
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
  padding: 10px 25px;
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

const PasswordRes = () => {
  return (
    <Container>
      <Content>
        <Header>Reset password</Header>
        <Text>
          Enter the email you used to sign up for a TMDB account and we'll send you the steps
          required to reset your password.
        </Text>
        <InputLabel>
          Email
          <Input placeholder={"What's your email"} type={'text'} />
        </InputLabel>
        <Button>Continue</Button>
        <Button2 as={Link} to={'/login'}>
          Cancel
        </Button2>
      </Content>
    </Container>
  );
};

export default PasswordRes;
