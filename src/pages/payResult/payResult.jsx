// @flow strict

import React,{ Component } from 'react';
import Header from '../../components/header/header.jsx'
import failUrl from '../../images/order-pay-fail.png';
import sucUrl from '../../images/order-pay-success.png';
import wxPayUrl from '../../images/cashier-wx-icon.png';
import aliPayUrl from '../../images/cashier-alipay-icon.png';
import ThemeContext from '../../context/index.jsx'

class PayResult extends Component{
    constructor(props){
        super(props);
        this.state={
            isBackFlag:true,
            payType:'wx',
            successFlag:false
        }
    }


    componentWillMount(){
        let query = this.props.location.query;
        if(query && query.successFlag){
            this.setState({
                successFlag:query.successFlag
            })
        }
    }

    choosePayType(e){
        var payType = e.type;
        this.setState({
            payType
        })
    }

    backIndex(){
        this.props.history.push({pathname:'/'});
    }

    render() {
        return (
            <div className="wrapper wrapper-default white-bg">
              <Header title="采神宝" isBackFlag={this.state.isBackFlag}></Header>
              {
                  this.state.successFlag?
                  <div className="order-buy">
                    <div className="order-buy-success">
                        <img className="obs-img" src={sucUrl} />
                        <h4 className="obs-text">支付成功</h4>
                        <p className="obs-tip">您已成功购买一年采通通服务，我们会在<br/>24小时内与您联系进行后续开通事宜</p>
                    </div>
                    <div className="cashier-btn" onClick={this.backIndex.bind(this)}>返回首页</div>
                  </div>:
                  <div className="order-buy">
                    <div className="order-buy-fail">
                        <img className="obf-img" src={failUrl} />
                        <h4 className="obf-text">支付失败</h4>
                    </div>
                    <div className="order-fail-select">
                        <div className="cashier-way">
                            <div className="flexBox flexAlignCenter cashier-way-item cashier-buy-item">
                                <h4 className="ofs-select-tip">支付遇到问题，请再次选择付款方式：</h4>
                            </div>
                            <div className="flexBox flexBetween flexAlignCenter cashier-way-item cashier-buy-item">
                                <img className="cb-wx-icon" src={wxPayUrl}/>
                                <input className="cb-way-radio" name="payWay" type="radio" onChange={this.choosePayType.bind(this,{type:'wx'})}  value="1" />
                                {this.state.payType == 'wx'?<span className="cb-way-select"></span>:null}
                            </div>
                            <div className="flexBox flexBetween flexAlignCenter cashier-way-item cashier-buy-item">
                                <img className="cb-alipay-icon" src={aliPayUrl} />
                                <input className="cb-way-radio" name="payWay" type="radio" onChange={this.choosePayType.bind(this,{type:'ali'})} value="2" />
                                {this.state.payType == 'ali'?<span className="cb-way-select"></span>:null}
                            </div>
                        </div>
                    </div>
                    <div className="cashier-btn">立即支付</div>
                  </div>
                
              }
            </div>
        );
    }
}

PayResult.contextType = ThemeContext;

export default PayResult;
