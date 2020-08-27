import React from 'react';

import './assets/styles/global.css';
import NavigationBar from './components/NavigationBar';
import ContentBox from './components/ContentBox';
import ArticlePreview from './components/ArticlePreview';

function App() {
  return (
    <>
    <div className='bgImage'>
      <NavigationBar/>
      <ContentBox>
        <ArticlePreview/>
        <ArticlePreview/>
        <ArticlePreview/>
        <ArticlePreview/>
        <ArticlePreview/>
        <ArticlePreview/>
      </ContentBox>
    </div>
    
    </>
  );
}

export default App;
