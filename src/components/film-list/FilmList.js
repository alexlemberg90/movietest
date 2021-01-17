import React from 'react';
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'

export const FilmList = ({items, onFilmClick}) => {

    return (
        <div className={styles.listWrapper}>
            {items.map(item =>(<div
                onClick={() => onFilmClick(item)}
                className={styles.filmItem} key={item.id}> <FilmItem {...item}/></div>))}
        </div>
    )
}