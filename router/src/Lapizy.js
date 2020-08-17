import React from "react";
import { useParams } from "react-router";

const list = [{ rut: '1685901234', full_name: 'cristian parra' }, { rut: '2085901234', full_name: 'ertfszn asdfg' }]

const Lapizy = () => {

    let { rut } = useParams();

    const nombres = list.find((item) => item.rut === rut);

    return (
       
        <h2> bienveniudo {nombres.full_name} {nombres.rut} </h2>

    )
}

export default Lapizy