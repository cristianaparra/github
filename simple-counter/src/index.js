import React from 'react';
import ReactDOM from 'react-dom';
import './SecondsCounter.css'
import * as serviceWorker from './serviceWorker'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function SecondsCounter(props) {
  return (
    <div className="counter">
      <div className="seconds">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="seconds four">{props.digitFour}</div>
      <div className="seconds three">{props.digitThree}</div>
      <div className="seconds two">{props.digitTwo}</div>
      <div className="seconds one">{props.digitOne}</div>
    </div>
  );

}

SecondsCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
}

let counter = 0;
setInterval(() => {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++


  ReactDOM.render(
    <SecondsCounter digitOne={one}
    digitTwo={two}
      digitThree={three}
      digitFour={four} />,
    document.getElementById('root')
  );
}, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
