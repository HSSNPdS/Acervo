import React from 'react';
import './styles.css';

import vaqImage from '../../assets/images/vagueiros.jpg';

function ArticlePreview(){
  return(
    <div className='article-box'>
      <img src={vaqImage} alt="Vaqueiros"/>
      <section className='article-text'>
        <h1>Sobre os vagueiros do sertão</h1>
        <p>
          Terra seca, morte e miséria...   Ainda assim, existem dúvidas a respeito de como a valorização de fatores subj
          etivos faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, a con
          stante divulgação das informações facilita a criação do remanejamento dos quadros funcionais. A prática cotidi
          ana prova que a consolidação das estruturas representa uma abertura para a melhoria das condições financeiras 
          e administrativas exigidas.
        </p>
      </section>
    </div>
  );
}

export default ArticlePreview;