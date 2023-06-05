import { iTarefa } from '../../../types/tarefa';
import style from '../lista.module.scss';

export default function Item({tarefa, tempo,selecionado, completado, id}: iTarefa) {
    return(
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo}</span>
        </li>
    )
}