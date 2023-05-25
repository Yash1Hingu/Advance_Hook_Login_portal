import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { LoginContextProvider } from './components/store/login-context';

ReactDOM.render(<LoginContextProvider><App /></LoginContextProvider>, document.getElementById('root'));
