import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { BiData } from "react-icons/bi";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer)
    };
    getTasks();
  }, []);
  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3004/tasks");
    const data = await res.json();
    return data;
  };
  //toggle task
  const onToggle = () => {
    setToggle(!toggle);
  };
  // add task
  const onAddTask = async (task) => {
    
    const res =await fetch('http://localhost:3004/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data])
    // console.log(res)
    // const id = Math.floor(Math.random() * 10000) + 1;
    // setTasks([...tasks, { id, ...task }]);
  };
  // delete task
  const deleteTask =async (id) => {
    await fetch(`http://localhost:3004/tasks/${id}`,{
      method:'DELETE'
    })
    // const data = await fetchTasks()
    // setTasks(data)
    setTasks(tasks.filter((val) => val.id !== id));
  };


  const toggleReminder =async (id) => {
    const data = await fetchTasks()
    const [task] = data.filter(val=>val.id===id)
    console.log(task)
    const toggleTask = {...task,reminder:!task.reminder}
    const res = await fetch(`http://localhost:3004/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(toggleTask)
    })
    const taskFormServer = await res.json()
    setTasks(tasks.map((item)=>(item.id===id?taskFormServer:item)))

    // setTasks(
    //   tasks.map((item) =>
    //     item.id === id ? { ...item, reminder: !item.reminder } : item
    //   )
    // );
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onToggle={onToggle} toggle={toggle} />
      {toggle && <AddTask onAddTask={onAddTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTaskProps={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <h2>
          ...Emptry <BiData />
        </h2>
      )}
    </div>
  );
}

export default App;
