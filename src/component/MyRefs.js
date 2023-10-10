import React, { useRef } from 'react';

function MyRefs() {
    const monElement = useRef(null);
    const getHeight  = () => {
        console.log(monElement.current.clientHeight);
    }

    return (
        <div>
            <textarea 
                ref={monElement}
                onInput={getHeight}
                id="story" 
                name="story" 
                rows="5" 
                cols="33" 
                value="It was a dark and stormy night..."   
            />
        </div>
    );
}

export default MyRefs;