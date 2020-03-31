import React from 'react';
var priObj = {
    "light":'black',
    "toggle":toggle,
    "name":'大哥好'
}

function toggle(content){
    priObj.light = content;
}

const ThemeContext = React.createContext(priObj);
export default ThemeContext 
export {priObj}