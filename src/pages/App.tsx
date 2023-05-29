import React from 'react';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import style from'./App.module.scss'
import Cronometro from '../componentes/cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
