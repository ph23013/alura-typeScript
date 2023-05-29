import Botao from "../botao"
import style from "../cronometro/cronometro.module.scss"
import Relogio from "./relogio"

export default function Cronometro() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>        
            <Botao>
                Comecar!
            </Botao>
        
        
        </div>
        )
     
    
}