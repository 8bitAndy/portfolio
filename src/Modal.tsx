import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './Modal.css'

type Props = {
    title: string;
    message: string;
    onClose: () => void;
};

export default function Modal({ title, message, onClose }: Props) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        // Focus OK so Enter closes it
        buttonRef.current?.focus();

        // Esc closes it
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    // Portal to body so the fixed overlay isn't trapped by the page's animated parent
    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 id="modal-title" className="modal-title">{title}</h2>
                <p className="modal-message">{message}</p>
                <button ref={buttonRef} type="button" className="modal-close" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>,
        document.body
    );
}
