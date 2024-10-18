
// const Todo = (props) => {

//     return (
//         <h3>{props.name}</h3>
//     )
// }

// import styles from './todo.module.css';
// const Todo = ({name = 'Martin', nbrEleves, firstname = 'Flavian'})


// Importation d'un fichier CSS
import './todo.css';
import TodoItems from '../TodoItems/TodoItems';

const Todo = ({todoList = []}) => {
    const todos = todoList.map(item => (
        <TodoItems 
            key={item.id}
            title={item.title} 
            description={item.description} 
            isCompleted={item.isCompleted}
            />
    ))

    // const monCss = {
    //     fontSize: '1.2rem',
    //     color: 'chartreuse'
    // }

    return (
        // <div>
        //     <h2>Hello {name}</h2>
        //     <p style={monCss}>Nombre d´élèves présent : {nbrEleves}</p>
        //     <p className={styles.p2}>Un des élèves a pour prénom : {firstname}</p>
        // </div>

        <section className='todo'>
            <div className='todo-container'>
                <ul>
                    {todos}
                </ul>
            </div>
        </section>
    )
}

export default Todo;