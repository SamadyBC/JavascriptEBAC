import React, { useState } from 'react';

function Calculator () {

    const [result, setResult] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault();
                let x = parseInt(e.target.elements.x.value);
                let y = parseInt(e.target.elements.y.value);
                setResult( parseInt(x) + parseInt(y));
            }}>
                <input type='number' name='x' placeholder='Digite o 1º número'
                    onChange={ e => setX(e.target.value) }/>
                <input type='number' name='y' placeholder='Digite o 2º número'
                    onChange={ e => setY(e.target.value) }/>
                <button type='submit'>Somar</button>
            </form>
            <p>Resultado: <strong>{result}</strong> </p>
            <p> {x} + {y} = {result}</p>
        </div>
    )
}

export default Calculator;