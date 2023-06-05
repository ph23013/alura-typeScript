import React, {useState} from 'react';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import style from'./App.module.scss'
import Cronometro from '../componentes/cronometro';

function App() {
  const [tarefas, setTarefas] = useState([{
        
    tarefa: "React",
    tempo: "02:00:00"
},{
    tarefa: "JavaScript",
    tempo: "01:00:00"
},{
    tarefa: "TypeScript",
    tempo: "01:30:00"

}]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas= {setTarefas}/>
      <Lista tarefas ={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
