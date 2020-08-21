import React from 'react';
import { Container } from './styles';

import bgSVG from '../../assets/images/background.svg';

const ContentBox: React.FC = () => {
  return(
    <div 
      style={{ backgroundImage: `url(${bgSVG})`, 
      width: '100%', 
      height: '40vh', 
      backgroundRepeat: 'no-repeat'}}
    >
      <Container>

      </Container>
    </div>
  );
}

export default ContentBox;