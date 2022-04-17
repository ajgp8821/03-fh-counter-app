// import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CounterApp
                value={10}
            />);


// React Antes
/*
import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const root = document.querySelector('#app');
ReactDOM.render(<CounterApp value={10} />, root);
*/
