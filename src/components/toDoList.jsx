import react, {useState} from 'react';
import upIcon from '../assets/upward.svg';
import downIcon from '../assets/downward.svg';
import deleteIcon from '../assets/delete.svg';
import addIcon from '../assets/add.svg';
import doneIcon from '../assets/done.svg';



function toDoList()
{
    
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState("");
    function handleTask()
    {
        const taskToDo = document.getElementById('taskToDo').value;
        if(taskToDo.length > 0)
        {
            setTasks(tasks => [...tasks,taskToDo]);
            setValue("");
        }
    }

    function handleTaskInput(e)
    {
        setValue(value => e.target.value);
    }

    function deleteTask(index)
    {
        setTasks(tasks.filter((_,i) => i!=index))
    }
    function decreasePriority(index)
    {
        var temp = "";
        const newTasks = [...tasks]
        if(index > 0)
        {
            temp = newTasks[index - 1];
            newTasks[index-1] = newTasks[index];
            newTasks[index] = temp;

            setTasks(newTasks);
        }
    }
    function increasePriority(index)
    {
        var temp = "";
        const newTasks = [...tasks]
        if(index < tasks.length-1)
        {
            temp = newTasks[index + 1];
            newTasks[index+1] = newTasks[index];
            newTasks[index] = temp;

            setTasks(newTasks);
        }
    }
    return(
        <>
        <div className='container'>
            <h1>To do list</h1>
            <div className='addingForm'>
                <input type="text"  id='taskToDo' value={value} onChange={handleTaskInput} placeholder='What task do you want to add to list?'/>
                <button onClick={handleTask}>Add task<img src={addIcon} alt="Add icon" /></button>
            </div>
            <ul>
                {tasks.map((task, index) => 
                <div className='task'>
                        <button className='done' onClick={() => deleteTask(index)}><img src={doneIcon} alt="Done icon" /></button>
                        <button className='delete' onClick={() => deleteTask(index)}><img src={deleteIcon} alt="Delete icon" /></button>
                        <button className='upper' onClick={() => increasePriority(index)}><img src={downIcon} alt="Up arrow" /></button>
                        <button className='lower' onClick={() => decreasePriority(index)}><img src={upIcon} alt="Down arrow" /></button>
                        <li key={index}>{task}</li>
                    </div>)}
            </ul>
            </div>
        </>
    );
}
export default toDoList;