import React from 'react';

const FreeGames = (props) => {
    return (
        <article className='epic__main__free__games__article'>
            <img src={props.src} className="epic__main__free__games__article__img"/>
            <h3 className="epic__main__free__games__article__title">{props.title}</h3>
            <h4 className="epic__main__free__games__article__subtitle">{props.subtitle}</h4>
            { props.isFreeNow ?<button className="epic__main__free__games__article__btn">FreeNow</button>: <button className="epic__main__free__games__article__btn">Coming Soon</button>}
        </article>
    );
}

export default FreeGames;