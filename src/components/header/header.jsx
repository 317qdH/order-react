import React,{ Component } from 'react';
// import PropTypes from 'prop-types';
import './header.less';

export default class Header extends Component{

    urlGoBack(){
        window.history.go(-1);
    }

    render(){
        return (
            <header className="header fixWrap">
                <div className={`${this.props.isBackFlag?'order-back':''} header-l`} onClick={this.urlGoBack.bind(this)}></div>
                <div className="header-c">{this.props.title}</div>
                <div className="header-r"></div>
            </header>
        )
    }
}
