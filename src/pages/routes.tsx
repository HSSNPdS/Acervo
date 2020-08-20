import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './HomePage';
import Text from './TextPage';
import Audio from './AudioPage';
import Video from './VideoPage';
import Image from './ImagePage';


function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/text" component={Text}/>
      <Route path="/audio" component={Audio}/>
      <Route path="/video" component={Video}/>
      <Route path="/image" component={Image}/>
    </BrowserRouter>
  )
}

export default Routes;
