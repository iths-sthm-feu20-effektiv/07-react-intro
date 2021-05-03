import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import ToggleMode from './components/ToggleMode'
import HiddenText from './components/HiddenText'

function App() {
    let message = 'Hello ';
    message += 'world!'
    return (
        <div className="App">
            <header className="App-header">
                { message }

                <HiddenText />
                <MyComponent />
                <ToggleMode />
            </header>
        </div>
    );
}

export default App;
