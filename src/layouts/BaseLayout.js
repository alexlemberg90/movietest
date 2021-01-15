import React from "react";
import styles from './BaseLayout.module.css'

export const Baselayout = ({children}) =>{

    return (
        <div className={styles.mainWrapper}>
            <header>header</header>
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    )
}