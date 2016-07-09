import React from 'react';

import Icon from '../icon/index.jsx';

import { layouts } from '../extdata';

import './index.scss';

class Property extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount () {
        this.setState({ 
            dropdown: false,
            selected: this.props.selected
        })
    }

    open () {
        this.state.dropdown = true;
        this.setState(this.state);
    }
    close () {
        this.state.dropdown = false;
        this.setState(this.state);
    }
    update (val) {
        this.state.selected = val;
        this.setState(this.state);
        this.close();
    }

    render() {

        let dropdown = this.state.dropdown ? (

            <Dropdown 
                update={this.update}
                options={layouts[this.props.type]} />
                
        ) : null;

        return (

            <div 
                onMouseEnter={this.open}
                onMouseLeave={this.close}
                className="property" >

                {this.state.selected}
                <Icon type={this.props.type}/>
                
                {dropdown}
            </div>
        );
    }

}

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: ['none', ...this.props.options]
        };
        
        this.update = this.update.bind(this);
    }

    componentDidMount () {
        var elem = this.refs.dropdown;
        elem.style.opacity = 0;
        requestAnimationFrame(() => {
            elem.style.transition = "opacity 250ms";
            elem.style.opacity = 1;
        });
    }

    update (e) {
        let val = e.target.textContent;

        val = val == 'none' ? null : val;

        this.props.update(val)
    }

    render() {
        let options = this.state.options.map(option => (
            <div 
                onClick={this.update}
                key={option} 
                className="option">

                {option}

            </div>
        ));

        return (
            <div 
                ref="dropdown"
                className="dropdown">
                {options}
            </div>
        );
    }

}

export default Property;
