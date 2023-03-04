import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, currentUser, onUpdateUser}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen])

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(name, description);
    }

    return(
        <PopupWithForm
            name = "profile"
            title = "Редактировать профиль"
            isOpen = {isOpen}
            onClose = {onClose}
            onSubmit = {handleSubmit}
            children = {
            <>
                <div className="popup__field popup__field_top">
                    <input className="popup__input popup__input_type_name" type="text" placeholder="Имя" name="name" id="name-input" minLength="2" maxLength="40" value={name} onChange={handleChangeName} required/>
                    <span className="popup__input-error name-input-error"></span>
                </div>
                <div className="popup__field popup__field_bottom">
                    <input className="popup__input popup__input_type_job" type="text" placeholder="Деятельность" name="about" id="job-input" minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} required />
                    <span className="popup__input-error job-input-error"></span>
                </div>
            </>}
            buttonText = "Сохранить" 
        />
    )
}

export default EditProfilePopup;