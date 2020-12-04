import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';

// webpack-dev-server 热更新
if (module.hot) {
	module.hot.accept();
}

let root = document.getElementById('root');
ReactDOM.render(<Home />, root);
