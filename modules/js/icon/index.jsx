import React from 'react';
import './index.scss';

let icons = d => require(`./icons/${d}.svg`);

class Icon extends React.Component {

    render() {
        return (
            <img 
                src={icons(this.props.type)}
                alt={this.props.type}
                title={this.props.type} 
                className="icon" />
        );
    }

}

export default Icon;
