import React, { useState, useEffect } from 'react';
import './App.scss';



const App = () => {




    const [state, setState] = useState("", )
    const [ligth, setLigth] = useState("",)
    const [luz, setLuz] = useState("",)

    useEffect(() => {
        document.className = "";
        return () => {
            document.className = "red ligth ";
        };
      }, [state]);

    return (
        <>
            <div id="traficcTop"></div>
            <div id="container">

                <div className={"red ligth " + state} onClick={() => setState("selected")}></div>
                <div className={"yellow ligth " + ligth} onClick={() => setLigth("selected")}></div>
                <div className={"green ligth " + luz} onClick={() => setLuz("selected")}></div>


            </div>

        </>
    )

}

export default App;
