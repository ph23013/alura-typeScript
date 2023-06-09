import React from "react"
import style from "../relogio/relogio.module.scss"

interface props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: props) {
    const minutos = Math.floor(tempo/ 60);
    const segundos = tempo % 60;
    const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, "0");
    const [segundosDezena, segundoUnidade] = String(segundos).padStart(2, "0");
    
    return(
        <>
        <span className={style.relogioNumero}>{minutosDezena}</span>
        <span className={style.relogioNumero}>{minutosUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundosDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}