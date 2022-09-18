import style from './Logo.module.css'

export function Logo(){
    return (
        <div>
            <h1 className={style.title}>Do it Well</h1>
            <span className={style.subTitle}>by <h2 className={style.subTitleName}>Alexis Klisch</h2></span>
        </div>
    )
}