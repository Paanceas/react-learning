import React from 'react';
import ReactDom from 'react-dom/client';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={10} />
    </React.StrictMode>
);