import React from 'react'

import installment from "../../assets/installment.png";

import s from "./styles.module.scss";


export const Installment = () => {
  return (
    <div className={s.installment}>
        <img src={installment} alt="" />
        <div className={s.installment__body}>
            <h2 className={s.installment__text}>Рассрочка <span className={s.installment__bold}>без %</span></h2>
            <button className={s.installment__detailly}>Подробнее</button>
        </div>
    </div>
  )
}
