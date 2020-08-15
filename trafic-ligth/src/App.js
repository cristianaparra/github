import React, { useState } from 'react';
import './App.scss';



const App = () => {

    const [state, setState] = useState("");

    return (
        <>
            <div id="traficcTop"></div>
            <div id="container">

                <div className={"red ligth " + (state == 'red' ? 'selected' : '')} onClick={() => setState("red")}></div>
                <div className={"yellow ligth " + (state == 'yellow' ? 'selected' : '')} onClick={() => setState("yellow")}></div>
                <div className={"green ligth " + (state == 'green' ? 'selected' : '')} onClick={() => setState("green")}></div>

            </div>

        </>
    )
};

export default App;