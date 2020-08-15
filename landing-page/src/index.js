import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Card from './component/Card';
import './Style.css'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(
    <div className='container'>
        <Navbar />
        <Jumbotron />

        <div className='row'>
        <Card />
        <Card />
        <Card />
        </div>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
