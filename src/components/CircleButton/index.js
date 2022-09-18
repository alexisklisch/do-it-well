import style from './CircleButton.module.css'

export function CircleButton({icon, children, green}){
    return (
        <button className={`${style.circleButton} ${green ? style.green : ''}`}>
            <img className={style.icon} src={icon}/>
            {children}
        </button>
    )
}