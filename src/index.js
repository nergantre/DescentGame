import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import GameContainer from './components/GameContainer';
import Store from './Store';
require('./static/default.css')

ReactDOM.render(
    <Provider store={Store}>
        <GameContainer/>
    </Provider>, document.getElementById('root'));