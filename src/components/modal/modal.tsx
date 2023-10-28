import React, { useRef } from 'react';
import { PropsInterface, User } from '../../types/types';
import './modal.css';



const Modal = (props: PropsInterface) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleCloseModal = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            props.onCloseModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" ref={modalRef}>
                <div className='modal-content-header'>
                    <p className='model-content-card-name'>{props.user?.name}</p>
                    <img className="modal-close" src={require('../../images/close.png')} onClick={props.onCloseModal} />
                </div>

                <div className="modal-content-information">
                    <div className="item">
                        <span className="label">Телефон:</span>
                        <span className="value">{props.user?.phone}</span>
                    </div>
                    <div className="item">
                        <span className="label">Почта:</span>
                        <span className="value">{props.user?.email}</span>
                    </div>
                    <div className="item">
                        <span className="label">Дата приема:</span>
                        <span className="value">{props.user?.hire_date}</span>
                    </div>
                    <div className="item">
                        <span className="label">Должность:</span>
                        <span className="value">{props.user?.position_name}</span>
                    </div>
                    <div className="item">
                        <span className="label">Подразделение:</span>
                        <span className="value">{props.user?.department}</span>
                    </div>

                    <div className="last-item">
                        <span className="last-item-label">Дополнительная информация:</span>
                        <span className="last-item-value">Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;