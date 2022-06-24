import React, { Component } from 'react';

class Box1 extends Component {
    render(props) {
        return (
            <div className="box">
                Box1
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Box1;