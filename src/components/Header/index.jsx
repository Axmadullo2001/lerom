import React from 'react'
import { Link } from "react-router-dom"

import logo from "../../assets/logo.png"

import s from "./styles.module.scss";


export const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.header__left_part}>
                    <div className={s.header__time_work_block}>
                        <svg className={s.header__clock_icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#004583" />
                        </svg>
                        <div className={s.header__work_time}>
                            <span>Пн-Пт с 10:00 до 20:00</span>
                            <span>Сб-Вс с 10:00 до 19:00</span>
                        </div>
                    </div>

                    <div className={s.header__saloon_service}>
                        <svg className={s.header__map} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8.9C9.39 8.9 8.9 9.39 8.9 10C8.9 10.61 9.39 11.1 10 11.1C10.61 11.1 11.1 10.61 11.1 10C11.1 9.39 10.61 8.9 10 8.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM12.19 12.19L4 16L7.81 7.81L16 4L12.19 12.19Z" fill="#004583" />
                        </svg>
                        <div className={s.header__our_saloon}><Link to="/" className={s.header__our_company}>Наши салоны</Link></div>
                    </div>
                </div>

                <div className={s.header__center}>
                    <Link to="/" className={s.header__logo_link}><img className={s.header__logo}
                        src={logo} alt="" /></Link>
                </div>

                <div className={s.header__right_part}>
                    <div className={s.header__top_block}>
                        <div className={s.header__shopping_place}>
                            <span>Отдел продаж: </span>
                            <svg className={s.header__phone_icon} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01111 4.32778C2.81111 5.9 4.1 7.18333 5.67222 7.98889L6.89444 6.76667C7.04444 6.61667 7.26667 6.56667 7.46111 6.63333C8.08333 6.83889 8.75556 6.95 9.44444 6.95C9.75 6.95 10 7.2 10 7.50556V9.44444C10 9.75 9.75 10 9.44444 10C4.22778 10 0 5.77222 0 0.555556C0 0.25 0.25 0 0.555556 0H2.5C2.80556 0 3.05556 0.25 3.05556 0.555556C3.05556 1.25 3.16667 1.91667 3.37222 2.53889C3.43333 2.73333 3.38889 2.95 3.23333 3.10556L2.01111 4.32778Z" fill="#071828" />
                            </svg>
                        </div>
                        <div className={s.header__contact}>
                            <span>8 (495) 664-54-57</span>
                            <span>8 (929) 928-86-35</span>
                        </div>
                    </div>

                    <div className={s.header__bottom_block}>
                        <div className={s.header__call_place}>
                            <span className={s.header__call_from_russia}>Звонок по России: </span>
                            <svg className={s.header__phone_icon} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01111 4.32778C2.81111 5.9 4.1 7.18333 5.67222 7.98889L6.89444 6.76667C7.04444 6.61667 7.26667 6.56667 7.46111 6.63333C8.08333 6.83889 8.75556 6.95 9.44444 6.95C9.75 6.95 10 7.2 10 7.50556V9.44444C10 9.75 9.75 10 9.44444 10C4.22778 10 0 5.77222 0 0.555556C0 0.25 0.25 0 0.555556 0H2.5C2.80556 0 3.05556 0.25 3.05556 0.555556C3.05556 1.25 3.16667 1.91667 3.37222 2.53889C3.43333 2.73333 3.38889 2.95 3.23333 3.10556L2.01111 4.32778Z" fill="#071828" />
                            </svg>
                            <div className={s.header__free_call}>
                                <span>8-800-000-00-00</span>
                                <span className={s.header__free_try}>Бесплатно</span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <nav className={s.navbar_elements}>
                <div className={s.navbar_elements__contents}>
                    <button className={`${s.navbar_elements__link} ${s.navbar_elements__btn}`}>Каталог
                        <svg className={s.navbar_elements__clicked} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L5 5L10 0H0Z" fill="#BB2822" />
                        </svg>
                    </button>
                    <Link to="/" className={s.navbar_elements__link}>О нас</Link>
                    <Link to="/" className={s.navbar_elements__link}>3D-моделирование</Link>
                    <Link to="/" className={s.navbar_elements__link}>Покупателю</Link>
                    <Link to="/" className={s.navbar_elements__link}>Доставка и оплата</Link>
                </div>
                <div className={s.navbar_elements__search_box}>
                    <input className={s.navbar_elements__search_panel} type="text" placeholder='Поиск по сайту...' name="" id="" />
                    <svg className={s.navbar_elements__search_icon} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29102 8.1761H8.70383L8.49571 7.97541C9.22413 7.12807 9.66266 6.02802 9.66266 4.83133C9.66266 2.16295 7.49971 0 4.83133 0C2.16295 0 0 2.16295 0 4.83133C0 7.49971 2.16295 9.66266 4.83133 9.66266C6.02802 9.66266 7.12807 9.22413 7.97541 8.49571L8.1761 8.70383V9.29102L11.8925 13L13 11.8925L9.29102 8.1761ZM4.83133 8.1761C2.98056 8.1761 1.48656 6.6821 1.48656 4.83133C1.48656 2.98056 2.98056 1.48656 4.83133 1.48656C6.6821 1.48656 8.1761 2.98056 8.1761 4.83133C8.1761 6.6821 6.6821 8.1761 4.83133 8.1761Z" fill="#BB2822" />
                    </svg>

                </div>
            </nav>
        </>
    )
}
