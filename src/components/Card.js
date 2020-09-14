import React from 'react';

const Card = (props) => {
    return (
        <article className = "epic__main__article">
            <img src={props.src} className = "epic__main__img" />
            <div className = "epic__main__container">
                <h3 className = "epic__main__title">{props.title}</h3>
                <h4 className = "epic__main__subtitle">{props.subtitle}</h4>
                <h5 className = "epic__main__price">{props.price}</h5>
            </div>
        </article>
    );
}

export default Card;