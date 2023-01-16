import React from 'react';
import styled from 'styled-components';
import Container from '../../../layout/Container';
import { Texts as information } from './constants/texts';
import { Check } from 'react-feather';
import { Link } from 'react-router-dom';

const SignUpContainer = styled(Container)`
  display: flex;
  margin: auto;
  @media (max-width: 1450px) {
    margin: 0.7rem 2rem;
  }
`;

const SideBar = styled('div')`
  margin: 1rem 0;
  display: block;
  box-sizing: border-box;
  min-width: 280px;
  width: 260px;
  border: 1px solid ${({ theme }) => theme.background.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.imageBorderRadius};
  overflow: hidden;
`;

const HeadText = styled('h1')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-weight: 600;
  padding: 20px;
  color: #fff;
  background-color: ${({ theme }) => theme.background.accountLightBlue};
  font-size: 19.2px;
  cursor: pointer;
`;
const OtherTexts = styled('p')`
  font-size: 16px;
  padding: 10px 20px 10px 40px;
  cursor: pointer;
`;
const Text = styled('div')``;
const Section = styled('div')`
  padding: 0 0 0 30px;
`;

const SectionHeader = styled('h1')`
  padding: 20px 20px 5px 40px;
  font-size: 24px;
`;

const InputLabel = styled('label')`
  margin: 1rem 2.6rem;
`;

const Input = styled('input')`
  margin: 1rem 2.6rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.background.lightGrey};
  color: #495057;
  border-radius: 0.25rem;
`;
const Button = styled('button')`
  margin: 0 2.5rem;
  cursor: pointer;
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
  color: ${({ theme }) => theme.background.accountLightBlue};
`;

const SignUp = () => {
  return (
    <SignUpContainer>
      <SideBar>
        <HeadText>Benefits of being a member</HeadText>
        {information.map(({ info }) => (
          <OtherTexts key={info}>
            <Check size={17} />
            {info}
          </OtherTexts>
        ))}
      </SideBar>
      <Section>
        <SectionHeader>Sign up for an account</SectionHeader>
        <OtherTexts>
          Signing up for an account is free and easy. Fill out the form below to get started.
          JavaScript is required to to continue.
        </OtherTexts>
        <InputLabel>
          Username
          <Input type={'text'} />
        </InputLabel>
        <InputLabel>
          Password (4 characters minimum)
          <Input type={'password'} />
        </InputLabel>
        <InputLabel>
          Confirm password
          <Input type={'password'} />
        </InputLabel>
        <InputLabel>
          Email
          <Input type={'text'} />
        </InputLabel>
        <Button>Sign Up</Button>
        <Button2 as={Link} to={'/'}>
          Cancel
        </Button2>
      </Section>
    </SignUpContainer>
  );
};

export default SignUp;
