import { iTarefa } from '../../types/tarefa';
import style from'./lista.module.scss'
import Item from './item'


function Lista({tarefas}: {tarefas: iTarefa []}) {
   
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item} />

                ))}
            </ul>   
        </aside>
    )
}


export default Lista;