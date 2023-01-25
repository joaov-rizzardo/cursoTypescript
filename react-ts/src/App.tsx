import React, { createContext } from 'react';
import Component from './components/Component';
import Destructuring, {Category} from './components/Destructuring';

// 4 - importaçãp de componentes
import FirstComponent from './components/firstComponent';

// 5 - desestruturando componentes
import SecondComponent from './components/SecondComponent';

//6 - use state
import State from './components/State';

// 8 - type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

// 9 - context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const appContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = "João"
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => (`Olá, ${name}`)

  // 8 - type
  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText:textOrNull = null

  //mySecondText = "Opa"

  const testandoFixed:fixed = "Isso"

  // 9 - context
  const contextValue:IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }
  
  return (
    <appContext.Provider value={contextValue}>
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
        <Destructuring  title="Primeiro post" content="Algum conteúdo" commentQty={15} tags={['ts', 'js']} category={Category.TS}/>
        <State />

        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}

        <Component />
      </div>
    </appContext.Provider>
  );
}

export default App;
