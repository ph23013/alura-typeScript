import React, {useState} from 'react';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import style from'./App.module.scss'
import Cronometro from '../componentes/cronometro';
import { iTarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<iTarefa>();

  function selecionaTarefa(tarefaSelecionada: iTarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
        
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas= {setTarefas}/>
      <Lista 
      tarefas ={tarefas}
      selecionaTarefa = {selecionaTarefa}
      />
      <Cronometro selecionado = {selecionado} />
    </div>
  );
}

export default App;
