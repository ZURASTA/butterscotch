import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/banner';
import Info from './components/info';
import Support from './components/support';
import Restaurant from './components/restaurant';
import Join from './components/join';
import Footer from './components/footer';
import registerServiceWorker from './registerServiceWorker';
require ('./sass/style.scss');

ReactDOM.render(<Banner />, document.getElementById('site-banner'));
ReactDOM.render(<Info />, document.getElementById('site-info'));
ReactDOM.render(<Support />, document.getElementById('site-support'));
ReactDOM.render(<Restaurant />, document.getElementById('site-restaurant'));
ReactDOM.render(<Join />, document.getElementById('site-join-us'));
ReactDOM.render(<Footer />, document.getElementById('site-footer'));
registerServiceWorker();
