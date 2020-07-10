import React,{ Component } from 'react';
import Header from '../../components/header/header.jsx'
import wxPayUrl from '../../images/cashier-wx-icon.png';
import aliPayUrl from '../../images/cashier-alipay-icon.png';
import CttUrl from '../../images/server-ctt-avatar.jpg';
import CsbUrl from '../../images/server-csb-avatar.jpg';
import TipAlert from '../../components/tipAlert/tipAlert.jsx'
import ThemeContext from '../../context/index.jsx'

export default class Cashier extends Component{
    constructor(props){
        super(props);
        this.state = {
            isBackFlag:true,
            payType:'wx',
            formData:{
                inviteCode:'',
                userTel:'',
                companyName:''
            },
            tipText:'',
            inputError:false,
            timeout:null,
            yearChooseTab:'',
            Ordertype:'',
            orderCount:0
        }
    }

    componentWillMount(){
        console.log(this)
        let query = this.props.location.query;
        if(query && query.type == 'ctt'){
            this.setState({
                yearChooseTab:query.yearChooseTab,
                Ordertype:query.type,
                orderCount:1980*query.yearChooseTab
            })
        }else if(query && query.type == 'csb'){
            this.setState({
                Ordertype:query.type,
                orderCount:6980
            })
        }

    }

    componentDidMount(){
        console.log(this.textInput)
        this.textInput.focus();
    }

    choosePayType(e){
        var payType = e.type;
        this.setState({
            payType
        })
    }

    formInput(type,e){
        var formData = this.state.formData;
        switch(type){
            case 'inviteCode':
              formData.inviteCode = e.target.value;
              this.setState({
                formData
              })
              break;
            case 'userTel':
                formData.userTel = e.target.value;
              this.setState({
                formData
              })
                break;
            case 'companyName':
                formData.companyName = e.target.value;
              this.setState({
                formData
              })
                break;
            default:
                break;
        }
    }

    submitForm(){
        if(this.state.timeout){return}
        console.log(this.state.formData)
        var formData = this.state.formData
        if(!formData.inviteCode){
            this.setState({
                tipText:'请填写邀请码',
                inputError:true
            })
            return
        }
        if(!formData.userTel){
            this.setState({
                tipText:'手机号码不能为空',
                inputError:true
            })
            return
        }
        if(!formData.companyName){
            this.setState({
                tipText:'公司名称不能为空',
                inputError:true
            })
            return
        }
        var sucflag = true;
        if(Math.random>0.5){
            sucflag = false
        }
        this.props.history.push({pathname:'/cashier/payresult',query:{'successFlag':sucflag}})
    }

    render(){
        return (
            <div className="wrapper wrapper-default white-bg">
              <Header title="支付页面" isBackFlag={this.state.isBackFlag}></Header>
                {
                    this.state.Ordertype == 'ctt'?
                    <div className="cashier-show">
                        <img className="scc-avatar" src={CttUrl} />
                        <div className="scc-main">
                            <p className="scc-main-text"><span>采通通</span> - 帮您捕获全域流量，助力获<br />取更多优质买家</p>
                            <div className="flexBox flexAlignCenter flexBetween">
                                <p className="scc-main-price">￥<span>{this.state.orderCount}</span>.00</p>
                                <p className="cashier-year">采通通<span>{this.state.yearChooseTab}</span>年</p>
                            </div>
                        </div>
                    </div>:
                    <div className="cashier-show">
                        <img className="scc-avatar" src={CsbUrl} />
                        <div className="scc-main">
                            <p className="scc-main-text"><span>采神宝</span> - 帮您捕获全域流量，助力获<br />取更多优质买家</p>
                            <div className="flexBox flexAlignCenter flexBetween">
                                <p className="scc-main-price">￥<span>6980</span>.00</p>
                            </div>
                        </div>
                    </div>
                }
                <div className="cashier-buy">
                    <div className="cashier-number cashier-buy-item">結算金額：<span>￥{this.state.orderCount}.00</span></div>
                    <div className="cashier-way">
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
                    <div className="cashier-buy-item">
                        <span className="required">邀请码：</span><input name="inviteCode" ref={(input) => {this.textInput = input;}} value={this.state.formData.inviteCode} className="cbi-input" onChange={this.formInput.bind(this,'inviteCode')} maxLength="11" type="tel" placeholder="请填写分享者的手机号" />
                    </div>
                    <div className="cashier-buy-item">
                        <span className="required">手机号：</span><input name="userTel" className="cbi-input" value={this.state.formData.userTel}  onChange={this.formInput.bind(this,'userTel')} maxLength="11" type="tel" placeholder="请填写常用手机号" />
                    </div>
                    <div className="cashier-buy-item">
                        <span className="required">公司名称：</span><input name="companyName" className="cbi-input" value={this.state.formData.companyName} onChange={this.formInput.bind(this,'companyName')} type="text" placeholder="请填写您的公司名称" />
                    </div>
                    <div className="cashier-btn" onClick={this.submitForm.bind(this)}>立即支付</div>
                </div>
                <TipAlert second={2000} tipText={this.state.tipText}></TipAlert>
            </div>
        )
    }
}


Cashier.contextType = ThemeContext;