import Card from "./Card.js";

function Cards({array, onCardClick, onCardLike, onCardDelete}) {
    return(
        <ul className="elements__list">
            {array.map((item, i) => {
                return(
                    <Card card={item} key={item._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
                );    
            })}
        </ul>
    );
}

export default Cards;