import React from 'react'
import { Link } from "react-router-dom"

import living_room from "../../assets/living_room.png";
import karinas_room from "../../assets/karinas_room.png";
import bed_room from "../../assets/bed_room.png";

import s from "./styles.module.scss"

export const MainContainer = () => {
    return (
        <div className={s.main_container}>
            <div className={s.main_container__navbar_block}>
                <Link to="/" className={s.main_container__link}>Главная</Link>>>
                <Link to="/" className={s.main_container__link}>Гостиные</Link>>>
                <Link to="/" className={`${s.main_container__link} ${s.main_container__active_link}`}>Коллекции</Link>
            </div>

            <div className={s.main_container__first_block}>
                <div className={s.main_container__top_block}>
                    <button className={s.main_container__new_product}>Новинка</button>
                    <img src={living_room} alt="" className={s.main_container__melissa_img} />
                    <svg className={s.main_container__polygon} width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-6.11959e-07 13L21 0.875644L21 25.1244L-6.11959e-07 13Z" fill="white"/>
                    </svg>
                </div>
                <div className={s.main_container__melissa_block}>
                    <h2 className={s.main_container__melissa_title}>Мелисса 2021</h2>
                    <p className={s.main_container__melissa_text}>Мини текст описания и преимущества покупки данного направления.</p>
                    <div className={s.main_container__see_more_composition}>
                        <button className={s.main_container__melissa_direction}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 6.99382e-07L-6.99382e-07 8L8 16Z" fill="#004583"/>
                            </svg>
                        </button>
                        <p className={s.main_container__melissa_see_more_text}>Смотреть варианты композиций</p>
                    </div>
                </div>
                <button className={s.main_container__add_to_basket}>
                    <svg className={s.main_container__basket_icon} width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8413 15.619H23.8095V9.7619H29.7619V5.85714H23.8095V0H19.8413V5.85714H13.8889V9.7619H19.8413V15.619ZM11.9048 33.1905C9.72222 33.1905 7.95635 34.9476 7.95635 37.0952C7.95635 39.2429 9.72222 41 11.9048 41C14.0873 41 15.873 39.2429 15.873 37.0952C15.873 34.9476 14.0873 33.1905 11.9048 33.1905ZM31.746 33.1905C29.5635 33.1905 27.7976 34.9476 27.7976 37.0952C27.7976 39.2429 29.5635 41 31.746 41C33.9286 41 35.7143 39.2429 35.7143 37.0952C35.7143 34.9476 33.9286 33.1905 31.746 33.1905ZM12.2421 26.8452L12.3016 26.611L14.0873 23.4286H28.869C30.3571 23.4286 31.6667 22.6281 32.3413 21.4176L40 7.73143L36.5476 5.85714H36.5278L34.3452 9.7619L28.869 19.5238H14.9405L14.6825 18.9967L10.2381 9.7619L8.35318 5.85714L6.4881 1.95238H0V5.85714H3.96825L11.1111 20.6757L8.43254 25.459C8.11508 26.0057 7.93651 26.65 7.93651 27.3333C7.93651 29.481 9.72222 31.2381 11.9048 31.2381H35.7143V27.3333H12.7381C12.4802 27.3333 12.2421 27.1186 12.2421 26.8452Z" fill="white"/>
                    </svg>
                </button>

            </div>

            <div className={s.main_container__second_block}>
                <div className={s.main_container__top_block}>
                    <img src={karinas_room} alt="" className={`${s.main_container__karina_img} ${s.main_container__melissa_img}`} />
                    <svg className={s.main_container__rectangle} width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 13L3.1153e-07 25.1244L2.23668e-08 0.875645L21 13Z" fill="white"/>
                    </svg>

                </div>
                <div className={s.main_container__melissa_block}>
                    <h2 className={s.main_container__melissa_title}>Карина</h2>
                    <p className={s.main_container__melissa_text}>Мини текст описания и преимущества покупки данного направления.</p>
                    <div className={s.main_container__see_more_composition}>
                        <button className={`${s.main_container__karina_direction} ${s.main_container__melissa_direction}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 6.99382e-07L-6.99382e-07 8L8 16Z" fill="#004583"/>
                            </svg>
                        </button>
                        <span className={s.main_container__melissa_see_more_text}>Смотреть варианты композиций</span>
                    </div>
                </div>
            </div>

            <div className={s.main_container__first_block}>
                <div className={s.main_container__top_block}>
                    <img src={bed_room} alt="" className={s.main_container__melissa_img} />
                    <svg className={s.main_container__polygon} width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-6.11959e-07 13L21 0.875644L21 25.1244L-6.11959e-07 13Z" fill="white"/>
                    </svg>
                </div>
                <div className={s.main_container__melissa_block}>
                    <h2 className={s.main_container__melissa_title}>Спальни</h2>
                    <p className={s.main_container__melissa_text}>Мини текст описания и преимущества покупки данного направления.</p>
                    <div className={s.main_container__see_more_composition}>
                        <button className={s.main_container__melissa_direction}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 6.99382e-07L-6.99382e-07 8L8 16Z" fill="#004583"/>
                            </svg>
                        </button>
                        <p className={s.main_container__melissa_see_more_text}>Смотреть варианты композиций</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
