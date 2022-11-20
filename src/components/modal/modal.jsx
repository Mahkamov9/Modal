import './modal.css';


function Modal () {
    return(
        <div className='modal-wrapper'>
            <div className="modal">
                <div className='modal__top'>
                    <h3 className='modal__title'>Qo'shish</h3>
                    <button className='modal__btn'> &times; </button>
                </div>
                <div className='modal__content'>
                    Modal content
                </div>

            </div>
        </div>
    )
}


export default Modal; 