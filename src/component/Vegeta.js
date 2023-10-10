import React from 'react';
import Image from 'react-bootstrap/Image';
import vegeta from './images/vegeta.png';

function Vegeta(props) {
    return (
        <div>
            <Image src={vegeta} style={{height: "400px"}} />
        </div>
    );
}

export default Vegeta;