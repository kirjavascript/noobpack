import React from 'react';
import Icon from './icon/index.jsx';


class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
    }

    componentDidMount () {
        this.setState({ data: ['about','audio_file','advance'] })
    }

    add () {
        this.setState({
            data: this.state.data.concat(['arrows'])
        })
    }
    sub () {
        this.state.data.pop();
        this.setState(this.state)
    }  

    render () {
        let icons = this.state.data.map(d => <Icon key={d} type={d}/>);

        return <div onMouseEnter={this.add} onMouseLeave={this.sub}>{icons}</div>;
    }
}

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({input: e.target.value})
    }

    render () {
        return <div>
            <input type="text" onChange={this.update} />
            {this.state.input}
        </div>;
    }
}

export { Test, Input };