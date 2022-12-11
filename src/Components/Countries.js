import React from 'react'

import style from './countries.module.css'

import {v4 as uuidv4} from "uuid"
import Country from './Country'

const Countries = props => {
  return (
    <section className={style.countries}>
        {props.countries.map((country) => {
            const countryNew = {country, id: uuidv4()}

            return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />
        })}
    </section>
  )
}

export default Countries