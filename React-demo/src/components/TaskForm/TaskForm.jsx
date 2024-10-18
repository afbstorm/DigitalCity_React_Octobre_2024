import { useState } from "react";
import { nanoid } from 'nanoid';

const TaskForm = ({onNewTaskSubmit = () => {}}) => {

    const [formValues, setFormValues] = useState(
        {
            id: nanoid(),
            title: '',
            description: '',
            priority: '',
            isCompleted: false
        }
    )

    const handleChanges = (e) => {
        setFormValues(formValues => ({
            ...formValues,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValues.id && formValues.description) {
            onNewTaskSubmit(formValues)
        }

        setFormValues(
            {
                id: nanoid(),
                title: '',
                description: '',
                priority: '',
                isCompleted: false
            }
        )
    }

    return (
       <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                <input 
                    type="text" 
                    name="title"
                    value={formValues.title}
                    onChange={(e) => handleChanges(e)} />
            </label>

            <label htmlFor="description">
                <textarea 
                    name="description" 
                    value={formValues.description} 
                    onChange={(e) => handleChanges(e)} />
            </label>

            <label htmlFor="priority">
                <select name="priority" value={formValues.priority} onChange={(e) => handleChanges(e)}>
                    <option value="" disabled>Sélectionner une priorité</option>
                    <option value="low">Faible</option>
                    <option value="medium">Modérée</option>
                    <option value="high">Haute</option>
                </select>
            </label>

            <button type="submit">Confirmer la tâche</button>
       </form>
    )
}

export default TaskForm;