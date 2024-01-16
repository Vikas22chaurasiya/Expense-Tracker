import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import { BrowserRouter as Router } from 'react-router-dom';

const appId = process.env.SPEECHLY_ID
ReactDOM.render(
    <SpeechProvider appId={appId} language="en-US">
        <Provider>
            <Router>
                <App />
            </Router>
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);
