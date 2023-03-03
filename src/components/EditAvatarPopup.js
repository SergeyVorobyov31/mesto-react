import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = useRef(0);


    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    return(
        <PopupWithForm
            name = "avatar"
            title = "Обновить аватар"
            isOpen = {isOpen}
            onClose = {onClose}
            onSubmit ={handleSubmit}
            children ={
                <div className="popup__field popup__field_avatar">    
                    <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на картинку" name="link" id="avatar-input" ref={avatarRef} defaultValue="" required />
                    <span className="popup__input-error avatar-input-error"></span>
                </div>
            }
            buttonText = "Сохранить"
        />
    )
}

export default EditAvatarPopup;