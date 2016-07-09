import React from 'react';
import {render} from 'react-dom';

import '../scss/index.scss'

import { Test, Input } from './test.jsx';
import Property from './property/index.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tree: []
        };
    }

    render () {
        return <div>
            <Property selected="absolute" type="type" />
            <Input/>
        </div>;
    }
}

render(<App/>, document.getElementById('app'));

// make floating editor?

// editor <input> built from parent state, modified by sibling?

// Node, G (svg)