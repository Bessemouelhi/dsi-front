import { useRef, forwardRef } from 'react';

const ParentComponent = () => {
    const monElement = useRef(null);

    const handleClick = ()=>{
        if (monElement.current) {
            monElement.current.focus();
        }
    }


    return (
        <div>
            <button onClick={handleClick}>Focus sur l'element enfant</button>
            <EnfantComponent ref={monElement}/>
        </div>
    );
};

const EnfantComponent = forwardRef((props, ref) => {
    return <input ref={ref} type="text" placeholder="Je suis l'input enfant" />;
});

export default ParentComponent;