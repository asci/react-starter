import React from 'react';
import text from './lib.js';

React.render(
    <div>
        <h1>{text.hello}!</h1>
    </div>,
    document.getElementById('app')
);
