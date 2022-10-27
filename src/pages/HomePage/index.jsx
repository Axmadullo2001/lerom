import React from 'react'
import { FilterItems } from '../../components/FilterIItems'
import { Header } from '../../components/Header'
import { Installment } from '../../components/Installment'
import { MainContainer } from '../../components/MainContainer'

import s from "./styles.module.scss"


export const HomePage = () => {
  return (
    <div>
        <Header />
        <div className={s.main_page}>
            <div className={s.main_page__left_window}>
              <FilterItems />
              <Installment />
            </div>
            <MainContainer />

        </div>

    </div>
  )
}
