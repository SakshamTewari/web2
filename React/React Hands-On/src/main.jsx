import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Todo from './Todo';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <Counter />
            <Todo />
        </>

    </React.StrictMode>
);

