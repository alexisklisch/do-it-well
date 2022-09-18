import style from './Hero.module.css'

export function Hero(){
    return (
        <section className={style.hero + ' container-1'}>
            <h2 className={style.heroText}>Sólo haz lo que tú quieras hacer, no lo que esperan de ti.</h2>
        </section>
    )
}