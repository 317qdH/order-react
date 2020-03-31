import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import App from './app.js';
import './utils/resize.js';
import './style/base-m.css';
import './style/common-rem.css';
import './style/common.css';
import ThemeContext,{priObj} from './context/index.jsx'


ReactDOM.render(
    <ThemeContext.Provider value={priObj}>
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeContext.Provider>,
    document.getElementById('root'));
