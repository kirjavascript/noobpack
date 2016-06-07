import '../scss/index.scss'

import Awesome from './Awesome.jsx';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!<Awesome/></p>  ;
  }
}

render(<App/>, document.getElementById('app'));
