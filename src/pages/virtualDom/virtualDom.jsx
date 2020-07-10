// @flow strict

import React,{ Component } from 'react';
import { func } from 'prop-types';

class VirtualDom extends Component {
    constructor(props){
        super(props);
        this.state = {
            ulRoot:'你好啊啊'
        }
    }

    componentDidMount(){
        this.setState({
            ulRoot:ulRoot
        })
    }

    render() {
        return (
            <div>
                virtualDOM算法简单实现
            </div>
        );
    }
}

export default VirtualDom;
/**
 * 
 * virtual DOM 算法实现
 *   步骤一：用JS对象模拟DOM树
 *   步骤二：比较两颗虚拟DOM树的差异
 *   步骤三：把差异应用到真正的DOM树上
 */

//步骤一：用JS对象模拟DOM树
function Element (tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}

Element.prototype.render = function(){
    var el = document.createElement(this.tagName);//根据tagName创建
    var props = this.props;

    for (var propName in props) {//设置节点的DOM属性
        var propValue = props[propName];
        el.setAttribute(propName,propValue)
    }

    var children = this.children || [];

    children.forEach(function(child){
        var childEl = (child instanceof Element)
          ?child.render() //如果子节点也是虚拟DOM，地柜实现构建DOM节点
          :document.createTextNode(child) //如果字符串，之构建文本节点
        el.appendChild(childEl)
    })

    return el
}

var ul = new Element('ul',{id:'list'},[
    new Element('li',{class:'item'},['Item 1']),
    new Element('li',{class:'item'},['Item 2']),
    new Element('li',{class:'item'},['Item 3'])
])

var ulRoot = ul.render();
console.log(ulRoot)

//步骤二：比较两颗虚拟DOM树的差异
function diff (oldTree, newTree){
    var index = 0;//当前节点的标志
    var patches = {};//用来记录每个节点差异的对象
    dfsWalk(oldTree, newTree, index, patches)
    return patches
}

//对两棵树进行深度优先遍历
function dfsWalk (oldNode, newNode, index, patches) {
    //对比oldNode和newNode的不同，记录下来
    patches[index] = [...arguments]
    diffChildren(oldNode,children, newNode.children, index, patches)
}

//遍历子节点
function diffChildren (oldChildren, newChildren, index,patches) {
    var leftNode = null;
    var currentNodeIndex = index;
    oldChildren.forEach(function (child,i) {
        var newChild = newChildren[i];
        currentNodeIndex = (leftNode && leftNode.count) // 计算节点的标识
          ? currentNodeIndex + leftNode.count + 1
          :currentNodeIndex + 1
        dfsWalk(child, newChild, currentNodeIndex, patches) //深度遍历子节点
        leftNode = child;
    })
}