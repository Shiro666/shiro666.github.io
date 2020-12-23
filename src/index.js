import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/reset.scss';

import RouterView from '@router/router.js';

// webpack-dev-server 热更新
if (module.hot) {
    module.hot.accept();
}

let root = document.getElementById('root');
ReactDOM.render(<RouterView />, root);
