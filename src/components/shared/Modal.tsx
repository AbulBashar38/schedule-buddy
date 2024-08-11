import clsx from "clsx";
import { IModalProps } from "../../utils/interface";

const Modal = ({ id, children, className }: IModalProps) => {
    return (
        <dialog id={id} className="modal">
            <div className={clsx("modal-box", className)}>
                {children}
            </div>
        </dialog>
    );
}

export default Modal;