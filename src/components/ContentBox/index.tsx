import React from 'react';
import './styles.css';

const ContentBox: React.FC = (props) => {
  return(
    <div className='content-box'>
      {props.children}
    </div>
  );
}

export default ContentBox;