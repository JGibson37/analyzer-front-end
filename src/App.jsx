import './css/App.css';
import React, {useState} from "react";
import RandomCardSelector from "./components/randomCardSelector";
import NamedCardSelector from "./components/namedCardSelector";

function App() {

    return (
        <div className="App">
            {/*<RandomCardSelector/>*/}
        <NamedCardSelector/>
        </div>
    );
}

export default App;
