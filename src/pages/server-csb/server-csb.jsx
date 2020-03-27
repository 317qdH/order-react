import React,{ Component } from 'react';
import Header from '../../components/header/header.jsx'
import './server-csb.less'
import backgroundUrl from '../../images/server-csb-avatar.jpg';

export default class ServerCsb extends Component{
    constructor(props){
        super(props);
        this.state = {
            isBackFlag:true,
            ChooseCttYear:false
        }
    }

    chooseYear(){
        this.setState({
            ChooseCttYear:!ChooseCttYear
        })
    }

    confirmOrder(){
        this.props.history.push({pathname:'/cashier',query:{'type':'csb'}})
    }

    render(){
        return (
            <div className="wrapper wrapper-default">
              <Header title="采神宝" isBackFlag={this.state.isBackFlag}></Header>
              <div className="server-csb-content">
                <div className="scc-show">
                    <img className="scc-avatar" src={backgroundUrl} />
                    <div className="scc-main">
                        <p className="scc-main-text">联合百度打造，多种营销，更<br />多展现带来更多订单！</p>
                        <p className="scc-main-price">￥<span>6980</span>.00</p>
                    </div>
                </div>
                <div className="scc-ctt">
                    <div className="scc-ctt-item">
                        <h4 className="scc-ctt-item-title">六站合一</h4>
                        <p className="">六站合一，站内、站外、微信群，全方位打通</p>
                    </div>
                    <div className="scc-ctt-item">
                        <h4 className="scc-ctt-item-title">流量曝光</h4>
                        <p>流量曝光，全网大几率收录，大几率曝光</p>
                    </div>
                    <div className="scc-ctt-item">
                        <h4 className="scc-ctt-item-title">生意机会</h4>
                        <p>流量曝光，全网大几率收录，大几率曝光</p>
                    </div>
                    <div className="scc-ctt-item">
                        <h4 className="scc-ctt-item-title">智能装修</h4>
                        <p>站内外六站店铺快速搭建</p>
                    </div>
                </div>
                <div className="scc-ajg">
                    <div className="scc-ctt-item scc-ctt-item2">
                        <h4 className="scc-ctt-item-title">百度爱采购</h4>
                        <p className="">百度PC、百度移动网页和百度APP，多端同步<br/>展示商品信息，方便卖家搜索触达</p>
                    </div>
                    <div className="scc-ctt-item">
                        <h4 className="scc-ctt-item-title">企业名片</h4>
                        <p>专属企业名片-特性卡片、企业信息、商品推荐</p>
                    </div>
                    <div className="scc-ctt-item">
                        <h4 className="scc-ctt-item-title">企业认证</h4>
                        <p>企业权威认证-真实性认证、行业认证</p>
                    </div>
                </div>
              </div>
              <div className="csb-server-container">
                <h4 className="csc-title">服务内容</h4>
                <p className="csc-server-title">搜好货服务：</p>
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
                <h4 className="csc-bd-title">百度服务：</h4>
                <p className="csc-bd-content">1、商品收录多端同步展现；<br/>
                    2、线索分发；<br/>
                    3、专属企业名片展示；<br/>
                    4、企业权威认证； <br/>
                    5、多场景触发展现；<br/>
                    6、优质商品推荐 ;<br/>
                    7、智能小程序。
                </p>
            </div>
              <div className="csc-buy-btn" onClick={this.confirmOrder.bind(this)}>立即购买</div>
              
            </div>
        )
    }
}