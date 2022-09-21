import { createPortal } from 'react-dom'
import style from './Modal.module.css'

export function Modal({children}){
    return createPortal(
        <div className={style.modalBackground}>
            {children}
        </div>,
        document.querySelector('#modal')
    )
}