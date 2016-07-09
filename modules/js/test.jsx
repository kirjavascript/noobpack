import React from 'react';
import Icon from './icon/index.jsx';


class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount () {
        this.setState({ data: ['about','audio_file','advance'] })
    }

    clicked () {
        this.setState({
            data: ['about','audio_file']
        })
    }  

    render () {
        var icons = this.state.data.map(d => <Icon type={d}/>);

        return <div onClick={this.clicked}>{icons}</div>;
    }
}

export default Test;