import Card from "./Card.js";

function Cards({array, onCardClick}) {
    return(
        array.map((item, i) => {
            return(
                <Card item={item} key={item._id} onCardClick={onCardClick}/>
            );    
        })
    );
}

export default Cards;