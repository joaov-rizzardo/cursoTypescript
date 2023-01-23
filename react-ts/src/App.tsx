import React from 'react';
import Destructuring from './components/Destructuring';

// 4 - importaçãp de componentes
import FirstComponent from './components/firstComponent';

// 5 - desestruturando componentes
import SecondComponent from './components/SecondComponent';

function App() {

  // 1 - variaveis
  const name: string = "João"
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => (`Olá, ${name}`)
  return (
    <div className="App">
      <h1>React com TS</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está trabalhando</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring  title="Primeiro post" content="Algum conteúdo" commentQty={15} tags={['ts', 'js']}/>
    </div>
  );
}

export default App;
