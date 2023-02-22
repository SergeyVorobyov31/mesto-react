import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import {useState, useEffect } from "react";
import api from "../utils/Api.js";
import Cards from "./Cards.js";
import Card from "./Card.js";

function App() {

    const [isEditProfilePopupOpen, setIsOpenProfilePopup] = useState(false);
    const [isEditAvatarPopupOpen, setIsOpenAvatarPopup] = useState(false);
    const [isAddPlacePopupOpen, setIsOpenCardPopup] = useState(false);
    const [cards, setInitialCards] = useState([]);
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [imagePopup, setIsOpenPopupImage] = useState(false);
    const [selectedCard, setSelectedcard] = useState({});
    
    useEffect(() => {
        fetchUserData();
        getDefaultCard();
    }, [])

    
    function fetchUserData() {
        api.getUserData()
        .then(data => {
            setUserName(data.name);
            setUserDescription(data.about)
            setUserAvatar(data.avatar)
        })
        .catch(err => console.log(err));
    }

    function popupProfileOpen() {
        document.addEventListener("keydown", handleEscClose);
        setIsOpenProfilePopup(true);
    }

    function popupAvatarOpen() {
        setIsOpenAvatarPopup(true);
        document.addEventListener("keydown", handleEscClose);
    }

    function popupCardOpen() {
        setIsOpenCardPopup(true);
        document.addEventListener("keydown", handleEscClose);
    }

    function closePopups() {
        setIsOpenProfilePopup(false);
        setIsOpenAvatarPopup(false);
        setIsOpenCardPopup(false);
        setIsOpenPopupImage(false);
        document.removeEventListener("keydown", handleEscClose);
    }

    function handleEscClose(evt) {
        if (evt) {
            if(evt.key === "Escape") {
                closePopups();
            }
        }
    }

    function getDefaultCard() {
        api.getInitialCards()
        .then(data => {
            return setInitialCards(data);
        })
        .catch(err => console.log(err));
    }

    function handleCardClick(card) {
        setIsOpenPopupImage(true);
        setSelectedcard(card);
        document.addEventListener("keydown", handleEscClose);
    }

    return (
        <div className="page">
            <Header />
            <Main 
                onEditAvatar={popupAvatarOpen} 
                onEditProfile={popupProfileOpen} 
                onAddPlace={popupCardOpen} 
                avatarUrl={userAvatar} userName={userName} 
                userAbout={userDescription} 
                list={<Cards 
                        array={cards}
                        onCardClick={handleCardClick}
                    />} 
            />
            <ImagePopup card={selectedCard} isOpen={imagePopup} onClose={closePopups}/>
            <Footer />
            <PopupWithForm
                name = "profile"
                title = "Редактировать профиль"
                isOpen = {isEditProfilePopupOpen}
                onClose = {closePopups}
                children = {
                <>
                    <div className="popup__field popup__field_top">
                        <input className="popup__input popup__input_type_name" type="text" defaultValue="" placeholder="Имя" name="name" id="name-input" minLength="2" maxLength="40" required />
                        <span className="popup__input-error name-input-error"></span>
                    </div>
                    <div className="popup__field popup__field_bottom">
                        <input className="popup__input popup__input_type_job" type="text" defaultValue="" placeholder="Деятельность" name="about" id="job-input" minLength="2" maxLength="200" required />
                        <span className="popup__input-error job-input-error"></span>
                    </div>
                </>}
                buttonText = "Сохранить" 
            />
            <PopupWithForm
                name = "avatar"
                title = "Обновить аватар"
                isOpen = {isEditAvatarPopupOpen}
                onClose = {closePopups}
                children ={
                    <div className="popup__field popup__field_avatar">    
                        <input className="popup__input popup__input_type_avatar" type="url" defaultValue="" placeholder="Ссылка на картинку" name="link" id="avatar-input" required />
                        <span className="popup__input-error avatar-input-error"></span>
                    </div>
                }
                buttonText = "Сохранить"
            />
            <PopupWithForm 
                name = "card"
                title = "Новое место"
                isOpen = {isAddPlacePopupOpen}
                onClose = {closePopups}
                children = {
                    <>
                        <div className="popup__field popup__field_top">
                            <input className="popup__input popup__input_type_title" type="text" defaultValue="" placeholder="Название" name="name" id="title-input" minLength="2" maxLength="30" required />
                            <span className="popup__input-error title-input-error"></span>
                        </div>
                        <div className="popup__field popup__field_bottom">    
                            <input className="popup__input popup__input_type_link" type="url" defaultValue="" placeholder="Ссылка на картинку" name="link" id="link-input" required />
                            <span className="popup__input-error link-input-error"></span>
                        </div>
                    </>
                }
                buttonText = "Создать"
            />
            <PopupWithForm 
                name = "delete"
                title = "Вы уверены?"
                children = ""
                buttonText = "Да"
            />   
        </div>
    );
}

export default App;
