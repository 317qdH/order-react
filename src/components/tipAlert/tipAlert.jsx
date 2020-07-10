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

class TipTwo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputError:false
        }
    }    
    componentWillReceiveProps(){
        if(this.state.inputError){
            return
        }
        this.setState({
            inputError:true
        })
        setTimeout(() => {
            this.setState({
                inputError:false
            })
        }, this.props.second);
    }
    render() {
        return (
            <div>
                {this.state.inputError?<TipAlert tipText={this.props.tipText}></TipAlert>:null}
            </div>
        );
    }
}

export default TipTwo;