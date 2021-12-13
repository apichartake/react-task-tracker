import {useState} from 'react'
import PropTypes from 'prop-types'


const AddTask = ({onAddTask}) => {
    const intitailTask = {
        text:'',
        day:'',
        reminder:false
    }

    const [addTask,setAddTask] = useState(intitailTask)
    const onSubmit = e => {
        e.preventDefault();
        if(!addTask.text){
            alert('plead enter text')
            
        }else{
        onAddTask(addTask)
        setAddTask(intitailTask)
        }
    }
    return (
    <form className='add-form' 
    onSubmit={ onSubmit }>
        <div className='form-control'>
            <label>Task : </label>
            <input type="text" 
            placeholder='add task' 
            value={addTask.text}
            onChange={(e)=>setAddTask({...addTask,text:e.target.value})}/>
        </div>
        <div className='form-control'>
            <label>Date & Time : </label>
            <input type="text" 
            placeholder='Date & Time' 
            value={addTask.day}
            onChange={e=>setAddTask({...addTask,day:e.target.value})}/>
        </div>
        <div className='from-control form-control-check'>
            <label>Reminder : </label>
            <input type="checkbox"
            checked={addTask.reminder}
            value={addTask.reminder}
            onChange={e=>setAddTask({...addTask,reminder:e.currentTarget.checked})} />
        </div>
            <input className='btn btn-block' type="submit" value='Save Task' />
        </form>
    )
}

AddTask.propTypes = {
    onAddTask:PropTypes.func
}

export default AddTask
