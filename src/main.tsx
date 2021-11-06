import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

const root = document.getElementById('root') || document.body;

ReactDOM.render(<App context={root} />, root);
