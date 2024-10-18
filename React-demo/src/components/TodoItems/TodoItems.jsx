import '../Todo/todo.css';

const TodoItems = ({title, description, isCompleted}) => {

    // Par ternaire
    const ternaryExample = () => {
        return isCompleted ? (
            <p className='todo-description-isCompleted'>{description}</p>
        ) : (
            <p className='todo-description-isActive'>{description}</p>
        )
    }

    // &&
    const andExample = () => {
        return isCompleted && (
            <p className='todo-description-isCompleted'>{description}</p>
        )
    }

    // if
    const ifElseExample = () => {
        if (isCompleted) {
            return <p className='todo-description-isCompleted'>{description}</p>
        } else {
            return <p className='todo-description-isActive'>{description}</p>
        }
    }

    // switch
    const switchExample = () => {
        switch (isCompleted) {
            case false:
                return <p className='todo-description-isActive'>{description}</p>
            case true:
                return <p className='todo-description-isCompleted'>{description}</p>
        }
    }


    return (
        <li>
            <div className="todo-titre-container">
                <h2 className="todo-titre">{title}</h2>
            </div>

            <div className="todo-description-container">
                {/* <p className="todo-description">{description}</p> */}
                {ternaryExample()}
                {/* {andExample()} */}
                {/* {ifElseExample()}
                {switchExample()} */}
            </div>
        </li>
    )
}

export default TodoItems;