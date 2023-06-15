import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utils/time"
import { iTarefa } from "../../types/tarefa"
import Botao from "../botao"
import style from "../cronometro/cronometro.module.scss"
import Relogio from "./relogio"

interface props {
    selecionado: iTarefa | undefined
}

export default function Cronometro({selecionado}: props) {
    const [tempo, setTempo] = useState<number>();
     useEffect(() => {
        if(selecionado?.tempo)
        setTempo(tempoParaSegundos(selecionado.tempo))
     },[selecionado])
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>        
            <Botao>
                Comecar!
            </Botao>
        
        
        </div>
        )
     
    
}