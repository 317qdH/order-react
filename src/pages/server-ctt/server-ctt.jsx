import React,{ Component } from 'react';
import Header from '../../components/header/header.jsx'
import './server-ctt.less'
import backgroundUrl from '../../images/server-ctt-avatar.jpg';

export default class ServerCsb extends Component{
    constructor(props){
        super(props);
        this.state = {
            isBackFlag:true,
            showYearPopup:false,
            yearChooseTab:1

        }
    }

    showCttYearPopup(){
        this.setState({
            showYearPopup:!this.state.showYearPopup
        })
    }

    chooseYear(i){
        this.setState({
            yearChooseTab:i
        })
    }

    confirmOrder(){
        this.setState({
            showYearPopup:false
        })
        this.props.history.push({pathname:'/cashier',query:{'type':'ctt','yearChooseTab':this.state.yearChooseTab}})
    }

    render(){
        return (
            <div className="wrapper wrapper-default">
              <Header title="采通通" isBackFlag={this.state.isBackFlag}></Header>
              <div className="server-ctt-content">
                <div className="scc-show stc-show">
                    <img className="scc-avatar" src={backgroundUrl} />
                    <div className="scc-main">
                        <p className="scc-main-text">帮您捕获全域流量，助力获取<br />更多优质买家</p>
                        <p className="scc-main-price">￥<span>1980</span>.00</p>
                    </div>
                </div>
                <h4 className="stc-title">六大核心捕获全域顶级流量</h4>
                <p className="stc-text">采通通多产品多渠道助您轻松链接BAT等顶级流量巨头</p>
                <div className="server-ctt-list">
                    <div className="server-ctt-item">
                        <h4 className="sci-title color-1a234a">营销型导弹名片</h4>
                        <p className="sci-text">客户维护在线沟通，<br/>实时效果看得见</p>
                    </div>
                    <div className="server-ctt-item">
                        <h4 className="sci-title">移动双端小程序店铺</h4>
                        <p className="sci-text color-e9ebf5">微信+百度，分享+搜索<br/>双重流量全掌握</p>
                    </div>
                    <div className="server-ctt-item">
                        <h4 className="sci-title">独立域名双端官网</h4>
                        <p className="sci-text color-e9ebf5">电脑+手机双端独立官网<br/>立即提升品牌形象</p>
                    </div>
                    <div className="server-ctt-item">
                        <h4 className="sci-title color-1a234a">平台双端炫铺</h4>
                        <p className="sci-text">电脑端+手机端助您<br/>捕获平台流量</p>
                    </div>
                    <div className="server-ctt-item">
                        <h4 className="sci-title color-1a234a">站内排名加权</h4>
                        <p className="sci-text">四端平台产品排名提升<br/>意想不到的高点击</p>
                    </div>
                    <div className="server-ctt-item">
                        <h4 className="sci-title">视频商机</h4>
                        <p className="sci-text color-e9ebf5">更直观更生动带来<br/>意想不到的高转化</p>
                    </div>
                </div>
            </div>

            <div className="csb-server-container">
                <h4 className="csc-title">服务内容</h4>
                <h4 className="csc-item-title">1、商铺服务：</h4>
                <p className="csc-item-content">A、完善公司相关信息（包括公司介绍、公司店铺、<br/>
                    联系方式、证书管理）；<br/>
                    B、商铺装修（包括根据需求设置招牌、热销商品、<br/>
                    主打商品等）
                </p>
                <h4 className="csc-item-title">2、商品服务：</h4>
                <p className="csc-item-content">商品发布（10000条商品发布量）；</p>
                <h4 className="csc-item-title">3、产品推广：</h4>
                <p className="csc-item-content">站内搜索排名前置、站内同行业店铺推荐；</p>
                <h4 className="csc-item-title">4、推送服务：</h4>
                <p className="csc-item-content">询盘信息和采购信息依据主营行业/主营产品与客户<br/>
                    自定义关键词进行推送；
                </p>
                <h4 className="csc-item-title">5、采购特权：</h4>
                <p className="csc-item-content">站内采购信息查看无条数限制，采购报价发布无条数限制；</p>
                <h4 className="csc-item-title">6、视频服务：</h4>
                <p className="csc-item-content">A、专项600M视频上传使用空间；<br/>
                    B、发布产品可关联视频内容；<br/>
                    C、视频标识高亮显示。
                </p>
            </div>
            <div className="csc-buy-btn" onClick={this.showCttYearPopup.bind(this)}>立即购买</div>
            {this.state.showYearPopup?
            <div className="popup ctt-year-popup">
                <div className="popup-bg" onClick={this.showCttYearPopup.bind(this)}></div>
                <div className="ctt-year-select">
                    <div className="cys-show">
                        <img className="scc-avatar" src={backgroundUrl} />
                        <div className="scc-main">
                            <p className="scc-main-text">采通通-搜好货基础会员服务，帮助<br/>中小型企业更成功</p>
                            <p className="scc-main-price">￥<span>1980</span>.00</p>
                        </div>
                    </div>
                    <div className="cys-list flexBox flexAlignCenter flexBetween">
                        <div idx="1" onClick={this.chooseYear.bind(this,1)} className={`cys-item ${this.state.yearChooseTab == 1?'cys-item-select':''}`}>一年</div>
                        <div idx="2" onClick={this.chooseYear.bind(this,2)} className={`cys-item ${this.state.yearChooseTab == 2?'cys-item-select':''}`}>两年</div>
                        <div idx="3" onClick={this.chooseYear.bind(this,3)} className={`cys-item ${this.state.yearChooseTab == 3?'cys-item-select':''}`}>三年</div>
                    </div>
                    <div className="cys-buy-btn" onClick={this.confirmOrder.bind(this)}>立即购买</div>
                </div>
            </div>:null
            }
            </div>
        )
    }
}