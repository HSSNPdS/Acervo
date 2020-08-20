import React from 'react';
import {Container} from './styles';

import PageHeader from '../../components/PageHeader';

const HomePage: React.FC = () => {
  return(
    <>
      <PageHeader/>
      <Container>
        <h1>Este é um site pessoal onde coloco todo material original que produzi, estão não exclusivamente para servir de portfólio mas sim para me motivar a continuar criando conteúdo, seja qual for.</h1>
        <p>Este é um site pessoal onde coloco todo material original que produzi, estão não exclusivamente para servir de portfólio mas sim para me motivar a continuar criando conteúdo, seja qual for.</p>
      </Container>
    </>
  );
}

export default HomePage;