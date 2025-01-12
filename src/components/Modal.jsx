
import { createPortal } from "react-dom"

export function Modal(props) {
    const {children, handleCloseModal} = props

    return createPortal( 
    <div className="modal-container">
        <button onClick={handleCloseModal} className="modal-underlay"/>
        <div className="modal-content">
            {children}
        </div>
    </div>,
    document.getElementById('portal')
)
}