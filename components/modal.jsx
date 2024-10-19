const Modal = ({ image, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
                <button 
                    className="absolute top-4 right-4 text-white text-2xl" 
                    onClick={onClose}
                >
                    &times; {/* X close button */}
                </button>
                <img src={image.src} alt={image.alt} className="max-w-full max-h-full" />
            </div>
        </div>
    );
};

export default Modal;
