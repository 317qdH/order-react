import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.jsx'
import './index.less'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isBackFlag:false
        }
    }

    componentDidMount(){
        function compose (...funcs) {
            console.log(funcs,'func')
            // console.log(...funcs,'...func')
            if (funcs.length === 0) {
              return arg => arg
            }
          
            if (funcs.length === 1) {
              return funcs [0]
            }
            return funcs.reduce ((a, b) => {
                return (...args) =>{
                    return  a (b (...args))
                }
            })
        }

        const f0 = (x) => { console.log (x) }
        const f1 = () => { console.log (1) }
        const f2 = () => { console.log (2) }
        let fArr = [f2, f1, f0];
        // let fArr = [];
        let res = compose (...fArr);
        console.log(res,'res')
        console.log (compose (...fArr)(100)) // 执行 f2 (f1 (f0 (100))) 输出 100 1 2
    }

    render(){
        return (
            <div className="wrapper">
              <Header title="活动页" isBackFlag={this.state.isBackFlag}></Header>
              <div className="index-content">
                <div className="server-list">
                    <div className="server-item">
                        <h4 className="server-item-title">采通通服务</h4>
                        <p className="server-item-text">帮您捕获全域流量，助力获取更多优质买家</p>
                        <p className="server-item-price">￥<span>1980</span>.00</p>
                        <Link to="/serverctt" className="server-item-btn" ></Link>
                    </div>
                    <div className="server-item">
                        <h4 className="server-item-title">采神宝服务</h4>
                        <p className="server-item-text">联合百度打造，多种营销，更多展现带来更多订单！</p>
                        <p className="server-item-price">￥<span>6980</span>.00</p>
                        <Link to="/servercsb" className="server-item-btn" ></Link>
                    </div>
                </div>
              </div>  
            </div>
        )
    }
}