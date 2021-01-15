import React from 'react';
import {FilmItem} from "../film-item";

export const FilmList = ({items}) => {

    return (
        <div>
            {items.map(item => <FilmItem key={item.id} {...item}/>)}
        </div>
    )
}