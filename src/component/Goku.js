import React from 'react';
import Image from 'react-bootstrap/Image';
import goku from './images/goku.png';

function Goku(props) {
    return (
        <div>
            <Image src={goku} style={{height: "400px"}} />
        </div>
    );
}

export default Goku;