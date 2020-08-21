import React from 'react';
import { Container, Title, Navbar } from './styles';
import {Link} from 'react-router-dom';

import NavbarButton from '../NavbarButton'

const PageHeader: React.FC = () => {
  return(
    <Container>
      <Link to="/">
        <Title>- ARQUIVO -</Title>
      </Link>

      <Navbar>
        <Link to="/text">
          <NavbarButton name="Textos"/>
        </Link>
        <Link to="/audio">
          <NavbarButton name="Áudios"/>
        </Link>
        <Link to="/video">
          <NavbarButton name="Vídeos"/>
        </Link>
        <Link to="/image">
          <NavbarButton name="Imagens"/>
        </Link>
      </Navbar>
    </Container>
  );
}

export default PageHeader;