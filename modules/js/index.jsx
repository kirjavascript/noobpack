import '../scss/index.scss'

//import Icon from './icon/index.jsx';
import Test from './test.jsx';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p> Icon test <Icon type='audio_file'/>
        <Icon type='about'/></p>;
    }
}

render(<Test/>, document.getElementById('app'));
