import React from 'react';

function Card(props) {

    return (
        
        <div className="card col-4 " >
            <img  className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        
    )
}

export default Card;