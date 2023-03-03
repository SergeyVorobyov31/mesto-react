import React from 'react';
import CurrentUserContext from '../context/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" alt="Аватар" src={currentUser.avatar} />
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-top">
                            <h1 className="profile__info-title">{currentUser.name}</h1>
                            <button className="profile__info-edit-button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__info-subtitle">{currentUser.about}</p>
                    </div> 
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {props.list}
            </section>
        </main>
    );
}

export default Main;