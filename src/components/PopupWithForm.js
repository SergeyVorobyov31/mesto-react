function PopupWithForm(props) {
    return(
        <div className={`popup ${props.isOpen ? "popup_opened": ""} popup_type_${props.name}`}>
            <div className="popup__overlay" onClick={props.onClose}></div>
            <div className="popup__container"> 
                <button className="popup__close-icon popup__close-delete" type="reset" onClick={props.onClose}></button>   
                <form className={`popup__form popup__form-${props.name}`} name={`form-${props.name}`} onSubmit={props.onSubmit} noValidate>
                    <h2 className="popup__title">{`${props.title}`}</h2>
                    {props.children}
                    <button className={`popup__button popup__button_${props.name}`} type="submit">{`${props.buttonText}`}</button>
                </form>
            </div>    
        </div>
    );
}

export default PopupWithForm;