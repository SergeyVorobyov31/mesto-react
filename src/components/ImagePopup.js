function ImagePopup({card, isOpen, onClose}) {
    return(
        <div className={`popup ${isOpen ? "popup_opened": ""} popup_type_image`}>
            <div className="popup__overlay" onClick={onClose}></div>
            <div className="popup__wrapper-image">
                <button className="popup__close-icon popup__close-image" type="reset" onClick={onClose}></button>
                <img className="popup__image" src={card.link} alt={card.name} />
                <p className="popup__subtitle">{card.name}</p>
            </div>
        </div>
    );
}

export default ImagePopup;