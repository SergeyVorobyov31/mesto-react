import React from 'react';
import CurrentUserContext from "../context/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like ${isLiked && "element__like_active"}`) 

    function handleClick() {
        onCardClick(card);
    }

    function handleLike() {
        onCardLike(card);
    }

    function handleDelete() {
        onCardDelete(card);
    }

    return (
        <div className="element-template">
            <li className="element">
                <img className="element__image" alt={card.name} src={card.link} onClick={handleClick} />
                {isOwn && <button className="element__delete" type="button" onClick={handleDelete} ></button> }
                <div className="element__container"> 
                    <h2 className="element__text">{card.name}</h2>
                    <div className="element__like-container">
                        <button className={cardLikeButtonClassName} type="button" onClick={handleLike} ></button>
                        <span className="element__number-likes">{card.likes.length}</span>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Card;