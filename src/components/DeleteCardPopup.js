import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({isOpen, onClose, onCardDelete, card}) {
    console.log(isOpen)

    function handleSubmit(e) {
        e.preventDefault();
        onCardDelete(card);
    }

    return(
        <PopupWithForm 
            name = "delete"
            title = "Вы уверены?"
            isOpen = {isOpen}
            onClose = {onClose}
            // onSubmit = {handleSumbit}
            children = ""
            buttonText = "Да"
        />
    )
}

export default DeleteCardPopup;