import React from 'react';
import './App.css';

function App() {
    let message = 'Hello ';
    message += 'world!'
    return (
        <div className="App">
            <header className="App-header">
                { message }
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

            </header>
        </div>
    );
}

export default App;
