import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const Container = styled('div')``;
const DropdownItems = () => {
  return (
    <Container>
      <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle caret className="nav-link" tag="a">
          Movies
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem active href="#" tag="a">
            Popular
          </DropdownItem>
          <DropdownItem active href="#" tag="a">
            Now Playing
          </DropdownItem>
          <DropdownItem active href="#" tag="a">
            Upcoming
          </DropdownItem>
          <DropdownItem active href="#" tag="a">    
            Top Rated
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle caret className="nav-link" tag="a">
          Movies
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem active href="#" tag="a">
            Popular
          </DropdownItem>
          <DropdownItem active href="#" tag="a">
            Now Playing
          </DropdownItem>
          <DropdownItem active href="#" tag="a">
            Upcoming
          </DropdownItem>
          <DropdownItem active href="#" tag="a">
            Top Rated
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Container>
  );
};

export default DropdownItems;
