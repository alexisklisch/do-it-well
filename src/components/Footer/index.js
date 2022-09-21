import { CircleButton } from "../CircleButton"

import style from "./Footer.module.css"

export function Footer(){
    return (
        <footer className={`${style.footer} container-1`}>
            <div className={style.soonContainer}>
                <CircleButton green icon='https://api.iconify.design/ic:outline-note-add.svg?color=%23eeeeee'>
                    New
                </CircleButton>
            </div>
            <div className={style.soonContainer}>
                <h5 className={style.soon}>Comming soon</h5>
                <CircleButton disabled icon='https://api.iconify.design/ic:baseline-bar-chart.svg?color=%23eeeeee'>
                    Stats
                </CircleButton>
            </div>
        </footer>
    )
}