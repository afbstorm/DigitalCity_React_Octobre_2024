import { useState } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import { nanoid } from 'nanoid';
import TaskForm from './components/TaskForm/TaskForm';
import DemoUseEffect from './components/DemoUseEffect/DemoUseEffect';

function App() {

  // const nom = 'Christophe';

  // const [value, setValue] = useState(0);

  // const handleIncrement = () => {
  //   setValue((prevValue) => prevValue + 1)
  //   console.log("a l'intérieur de la fonction: ", value);
  // }

  // console.log("a l'extérieur de la fonction :", value);

  const [list, setList] = useState([
    { 
      id: nanoid(),
      title: 'Apprendre React',
      description: 'Passer du temps à parler de Flavian',
      priority: 'Haute',
      isCompleted: false
    },
    { 
      id: nanoid(),
      title: 'Aller manger',
      description: 'Un bon sandwish, gracieusement offert',
      priority: 'Modérée',
      isCompleted: true
    },{ 
      id: nanoid(),
      title: 'Voir les useState',
      description: 'Comment gérer un état local',
      priority: 'Haute',
      isCompleted: false
    },{ 
      id: nanoid(),
      title: 'Redux ToolKit',
      description: "L'enfer ne commence que maintenant",
      priority: 'Faible',
      isCompleted: false
    },
  ])

  const handleNewTask = (task) => {
    setList(list => [...list, task])
  }

  return (
    <>
      {/* <Todo name={nom} nbrEleves={4} firstname='Nicolas'/> */}
      {/* <button onClick={handleIncrement}>Incrémente de 1</button>
      <p>{value}</p> */}

      {/* <TaskForm onNewTaskSubmit={handleNewTask}/>
      <Todo todoList={list} /> */}

        <DemoUseEffect />
    </>
  )
}

export default App
