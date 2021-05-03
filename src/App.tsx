import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import ToggleMode from './components/ToggleMode'
import HiddenText from './components/HiddenText'
import ReactToThis from './components/ReactToThis'
import Settings from './components/Settings'

function App() {
    let message = 'Hello ';
    message += 'world!'
    return (
        <div className="App">
            <header className="App-header">
                { message }
                <ReactToThis />

                <HiddenText />
                <MyComponent />
                <ToggleMode />
                <Settings />
            </header>
        </div>
    );
}

export default App;
