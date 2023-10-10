import { createPortal } from 'react-dom';

const Parent = ({name, open, close}) => {
    if (!open) return null;
    return createPortal(
    <div className='parent'>
        <p onClick={()=>close(false)}>&#10006;</p>
        <h2>Une modale</h2>
        <p>{name}</p>
        <p>Ceci est un exemple de modale en React.</p>
    </div>, 
    document.getElementById('modal-root')
  );
};

export default Parent;