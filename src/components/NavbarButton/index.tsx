import React from 'react';
import { Container, Title } from './styles';

interface NavbarButtonProps{
  name: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  return(
    <Container>
      <Title>{props.name}</Title>
    </Container>
  )
}

export default NavbarButton;