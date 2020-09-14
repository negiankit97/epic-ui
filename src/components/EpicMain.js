import React from 'react';
import { Switch, Link, NavLink } from 'react-router-dom';
import '../styles/main.scss';
import { FaArrowLeft, FaArrowRight, FaRegPlayCircle, FaGift } from 'react-icons/fa';
import Card from './Card';
import FreeGames from './FreeGames';

const EpicMain = (props) => {
    return (
        <div className="epic__wrapper">
            <aside className="epic__sidebar"></aside>
            <header className="epic__header">
                <span className="epic__header__menu" style={{ visibility: 'hidden' }}></span>
                <nav className="epic__header__nav">
                    <div className="epic__header__nav__section1">
                        <img src={process.env.PUBLIC_URL + '/images/gamepad.svg'} className="epic__header__nav__section1__img"></img>
                        <ul className="epic__header__nav__section1__list">
                            <li className="epic__header__nav__section1__list__item"><NavLink activeClassName="active" to={{ pathname: '/store', state: { from: props.location } }}>Store</NavLink></li>
                            <li className="epic__header__nav__section1__list__item"><NavLink activeClassName="active" to={{ pathname: '/news', state: { from: props.location } }}>News</NavLink></li>
                            <li className="epic__header__nav__section1__list__item"><NavLink activeClassName="active" to={{ pathname: '/faq', state: { from: props.location } }}>FAQ</NavLink></li>
                            <li className="epic__header__nav__section1__list__item"><NavLink activeClassName="active" to={{ pathname: '/help', state: { from: props.location } }}>Help</NavLink></li>
                            <li className="epic__header__nav__section1__list__item"><NavLink activeClassName="active" to={{ pathname: '/unreal', state: { from: props.location } }}>Unreal Engine</NavLink></li>
                        </ul>
                    </div>
                    <div className="epic__header__nav__section2">
                        <img src="" className="" />
                        <button className="epic__header__nav__section2__btn"><span className="epic__header__nav__section2__btn__logo"></span>SIGN IN</button>
                        <button className="epic__header__nav__section2__btn">GET EPIC GAMES</button>
                    </div>
                </nav>
            </header>
            <main className="epic__main">
                <section className='epic__main__search__section'>
                    <ul className="epic__main__search__section__links">
                        <li className="epic__main__search__section__link"><NavLink activeClassName="selected" to="/discover">Discover</NavLink></li>
                        <li className="epic__main__search__section__link"><NavLink activeClassName="selected" to="/browse">Browse</NavLink></li>
                    </ul>
                    <form className="epic__main__search">
                        <span className="epic__main__search__icon" />
                        <input type="text" className="epic__main__search__input" placeholder="Search"></input>
                    </form>
                </section>
                <section className='epic__main__carousel'>
                    <div className="epic__main__carousel__wrapper">
                        <img src={process.env.PUBLIC_URL + '/images/games.jpg'} className="epic__main__carousel__img"></img>
                        <article className="epic__main__carousel__article">
                            <div className="epic__main__carousel__header">
                                <h1 className="epic__main__carousel__title">Title</h1>
                                <span className=""><FaArrowLeft style={{ fontSize: '16px' }}></FaArrowLeft></span>
                                <span className=""><FaArrowRight style={{ fontSize: '16px' }}></FaArrowRight></span>
                                <span className=""><FaRegPlayCircle style={{ fontSize: '16px' }}></FaRegPlayCircle></span>
                            </div>
                            <div className="epic__main__carousel__description">
                                lorem40
                        </div>
                            <div className="epic__main__carousel__footer"></div>
                        </article>
                    </div>
                </section>
                <section className="epic__main__new__release">
                    <article className="epic__main__new__release__wrapper">
                        <h2 className="epic__main__new__release__title">New Releases</h2>
                        <ul className="epic__main__new__release__list">
                            <li className="epic__main__new__release__list__item">
                                <Link to="/kingdomofasulurs">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Kingdom of Amalur Re-Reckoning" subtitle="KAIKO, Big Huge Games" price="$17.59" />
                                </Link>
                            </li>
                            <li className="epic__main__new__release__list__item">
                                <Link to="/kingdomofasulurs">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Tony Hawks&trade; Pro Skater&trade;-1-and-2" subtitle="Vicarious Visions | Activision" price="$33.89" />
                                </Link>
                            </li>
                            <li className="epic__main__new__release__list__item">
                                <Link to="/kingdomofasulurs">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="WRC 9 FIA World Rally" subtitle="KT Racing | Nacon" price="$37.00" />
                                </Link>
                            </li>
                            <li className="epic__main__new__release__list__item">
                                <Link to="/kingdomofasulurs">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="SpellBreak" subtitle="Proletariat Inc" price="Free" />
                                </Link>
                            </li>
                            <li className="epic__main__new__release__list__item">
                                <Link to="/kingdomofasulurs">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Diabotical" subtitle="The GD Studio" price="Free" />
                                </Link>
                            </li>
                        </ul>
                    </article>
                </section>
                <section className="epic__main__free__games">
                    <div className="epic__main__free__games__wrapper">
                        <div className="epic__main__free__games__header">
                            <div className="epic__main__free__games__header__left">
                                <FaGift style={{ fontSize: '4em' }} className="epic__main__free__games__img" />
                                <h1 className="epic__main__free__games__header__title">Free Games</h1>
                            </div>
                            <button className="epic__main__free__games__header__btn">View More</button>
                        </div>
                        <ul className="epic__main__free__games__list">
                            <li className="epic__main__free__games__list__item">
                                <Link to="/intothebreach">
                                    <FreeGames src={process.env.PUBLIC_URL + '/images/games.jpg'} isFreeNow={true} title="Into The Breach" subtitle="Free Now - Sep 10 at 08:30 PM" />
                                </Link>
                            </li>
                            <li className="epic__main__free__games__list__item">
                                <Link to="/intothebreach">
                                    <FreeGames src={process.env.PUBLIC_URL + '/images/games.jpg'} isFreeNow={false} title="Into The Breach" subtitle="Free Now - Sep 10 at 08:30 PM" />
                                </Link>
                            </li>
                            <li className="epic__main__free__games__list__item">
                                <Link to="/intothebreach">
                                    <FreeGames src={process.env.PUBLIC_URL + '/images/games.jpg'} isFreeNow={false} title="Into The Breach" subtitle="Free Now - Sep 10 at 08:30 PM" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="epic__main__free__play">
                    <h1>Free-to-Play</h1>
                    <div className="epic__main__free__play__wrapper">
                        <h1 className="epic__main__free__play__title">SpellBreak</h1>
                        <p className="epic__main__free__play__description">Fight to become an all powerful battlemage. Available now!</p>
                        <button className="epic__main__free__play__btn">PLAY NOW</button>
                    </div>
                </section>
                <section className="epic__main__game__sales">
                    <article className="epic__main__game__sales__wrapper">
                        <h1 className="epic__main__game__sales__title">Game Sales</h1>
                        <ul className="epic__main__game__sales__list">
                            <li className="epic__main__game__sales__list__item">
                                <Link to="/deathstranding">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Death Stranding" subtitle="Kojima Productions | 505 Games" price="$41.99" />
                                </Link>
                            </li>
                            <li className="epic__main__game__sales__list__item">
                                <Link to="/gta5">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Grand Theft Auto 5: Premium Edition" subtitle="Rockstar Games" price="$12.99" />
                                </Link>
                            </li>
                            <li className="epic__main__game__sales__list__item">
                                <Link to="/outerworlds">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="The Outer Worlds" subtitle="Obsidian Entertainment" price="$22.49" />
                                </Link>
                            </li>
                            <li className="epic__main__game__sales__list__item">
                                <Link to="/roguecompany">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Rogue Company: Standard Edition" subtitle="Hi-Rez Studios" price="$9.01" />
                                </Link>
                            </li>
                            <li className="epic__main__game__sales__list__item">
                                <Link to="/missilecommand">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Missile Command: Recharged" subtitle="Nickervision Studios | Stari Games" price="$0.66" />
                                </Link>
                            </li>
                        </ul>
                    </article>
                </section>
                <section className="epic__main__special__sale">
                    <h1>Sales and Specials</h1>
                    <article className="epic__main__special__sale__wrapper">
                        <h1 className="epic__main__special__sale__title">Death Stranding</h1>
                        <p className="epic__main__special__sale__description">Unite the divided - One more time. Save 25% until 23 Sept.</p>
                        <button className="epic__main__special__sale__btn">SAVE NOW</button>
                    </article>
                </section>
                <section className="epic__main__top__sellers">
                    <article className="epic__main__top__ sellers__wrapper">
                        <h1 className="epic__main__top__sellers__title">
                            Top Sellers
                        </h1>
                        <ul className="epic__main__top__sellers__list">
                            <li className="epic__main__top__sellers__list__item">
                                <Link to="/remnant">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Remnant: From The Ashes" subtitle="Gunfire Games | Perfect World" price="$20.99" />
                                </Link>
                            </li>
                            <li className="epic__main__top__sellers__list__item">
                                <Link to="/mortalshell">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="Mortal Shell" subtitle="Cold Symmetry | PlayStack Sttudios" price="$20.99" />
                                </Link>
                            </li>
                            <li className="epic__main__top__sellers__list__item">
                                <Link to="/totalwar">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="A Total War Saga" subtitle="Creative Assembly|Sega" price="$31.49" />
                                </Link>
                            </li>
                            <li className="epic__main__top__sellers__list__item">
                                <Link to="/snowrunner">
                                    <Card src={process.env.PUBLIC_URL + '/images/games.jpg'} title="SnowRunner" subtitle="Saber Interactive" price="$24.99" />
                                </Link>
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default EpicMain;