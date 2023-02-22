import Card from "./Card.js";

function Cards({array, onCardClick}) {
    return(
        <ul className="elements__list">
            {array.map((item, i) => {
                return(
                    <Card item={item} key={item._id} onCardClick={onCardClick}/>
                );    
            })}
        </ul>
    );
}

export default Cards;