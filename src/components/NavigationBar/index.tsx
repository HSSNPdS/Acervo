import React from 'react';

import './styles.css';

function NavigationBar() {
  return(
    <header className='page-header'>
      <title>ARQUIVO</title>
      <div className='container-buttons'>
        <button>Textos</button>
        <button>Imagens</button>
        <button>Áudios</button>
        <button>Vídeos</button>
      </div>
    </header>
  );
}

export default NavigationBar;