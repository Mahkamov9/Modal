import { useEffect, useRef } from 'react';
import './modal.css';


function Modal ( {children, modal, setModal , topText} ) {

    const modalWrapper = useRef(null);

    const handleCloseModal = (evt) => {
        if( evt.target===modalWrapper.current){
            setModal(false)
        }
    }

    useEffect(()=>{
        const listener = (evt) =>{
            console.log(evt.keyCode);
            if(evt.keyCode === 27){
                setModal(false)
            }
        }

        if( modal){
            window.addEventListener('keyup', listener)
        }

        return() => window.removeEventListener('keyup', listener);

    }, [modal, setModal] );


    return(
        <div 
            ref={modalWrapper} 
            className={`modal-wrapper ${modal && "modal-open"} `}
            onClick={ handleCloseModal }
            >
            <div className="modal">
                <div className='modal__top'>
                    <h3 className='modal__title'> {topText} </h3>
                    <button onClick={ ()=> {setModal(false)} } className='modal__btn'> &times; </button>
                </div>
                <div className='modal__content'>
                    {children}
                </div>

            </div>
        </div>
    )
}


export default Modal; 