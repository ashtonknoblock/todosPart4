import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Index = () => (
<BrowserRouter>
    <App />
</BrowserRouter>
)


ReactDOM.render(
    <Index />
, document.getElementById('root'));
registerServiceWorker();
