function Card({item, onCardClick}) {

    function handleClick() {
        onCardClick(item);
    }

    return (
        <div className="element-template">
            <li className="element">
                <img className="element__image" alt={item.name} src={item.link} onClick={handleClick} />
                <button className="element__delete" type="button"></button>
                <div className="element__container"> 
                    <h2 className="element__text">{item.name}</h2>
                    <div className="element__like-container">
                        <button className="element__like" type="button"></button>
                        <span className="element__number-likes">{item.likes.length}</span>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Card;