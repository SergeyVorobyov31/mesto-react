import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onUpdateCards}) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateCards({name, link});
    }

    return(
        <PopupWithForm 
            name = "card"
            title = "Новое место"
            isOpen = {isOpen}
            onClose = {onClose}
            onSubmit = {handleSubmit}
            children = {
                <>
                    <div className="popup__field popup__field_top">
                        <input className="popup__input popup__input_type_title" type="text" placeholder="Название" name="name" id="title-input" minLength="2" maxLength="30"  value={name} onChange={handleChangeName} required />
                        <span className="popup__input-error title-input-error"></span>
                    </div>
                    <div className="popup__field popup__field_bottom">    
                        <input className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку" name="link" id="link-input"  value={link} onChange={handleChangeLink} required />
                        <span className="popup__input-error link-input-error"></span>
                    </div>
                </>
            }
            buttonText = "Создать"
        />
    )
}

export default AddPlacePopup;