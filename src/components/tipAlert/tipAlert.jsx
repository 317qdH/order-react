// @flow strict

import React,{ Component } from 'react';

class TipAlert extends Component{


    render() {
        return (
            <div>
                <div className="order-tip-popup">
                    <div className="otp-content">{this.props.tipText}</div>
                </div>
            </div>
        );
    }
}

export default TipAlert;