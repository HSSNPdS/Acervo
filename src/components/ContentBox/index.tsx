import React from 'react';
import './styles.css';

const ContentBox: React.FC = (props) => {
  return(
    <div className='content-box'>
      <div className='color-box'>
      </div>
      {props.children}
    </div>
  );
}

export default ContentBox;