 
 import Task from './Task'
 


const Tasks = ({tasks,deleteTaskProps,onToggle}) => {
    
    return (
        <>
            {tasks.map((task)=>(
                <Task 
                key={task.id} 
                task={task} 
                deleteTaskProps2={deleteTaskProps}
                onToggle={onToggle}
                />
                
            )) }
        </>
    )
}

export default Tasks
