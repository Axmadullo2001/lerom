import React from 'react'

import s from "./styles.module.scss"

export const FilterItems = () => {
  return (
    <div className={s.filter_items}>
        <button className={s.filter_items__btn}>
            Новинки
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__btn}>
            Гостинные
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__btn}>
            Прихожие
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__btn}>
            Спальни
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__btn}>
            Детские
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__btn}>Кровати
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__btn}>
            Матрасы
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#071828"/>
            </svg>
        </button>
        <button className={s.filter_items__download}>
            Скачать каталог
            <svg className={s.filter_items__icon_download } width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0938 3.775C11.6687 1.61875 9.775 0 7.5 0C5.69375 0 4.125 1.025 3.34375 2.525C1.4625 2.725 0 4.31875 0 6.25C0 8.31875 1.68125 10 3.75 10H11.875C13.6 10 15 8.6 15 6.875C15 5.225 13.7188 3.8875 12.0938 3.775ZM10.625 5.625L7.5 8.75L4.375 5.625H6.25V3.125H8.75V5.625H10.625Z" fill="white"/>
            </svg>

        </button>
    </div>
  )
}
