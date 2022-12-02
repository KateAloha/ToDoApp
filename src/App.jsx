import './App.css';
import useStore from "./zustand/store"
import { useState } from "react"


function App() {
  
  const [task, setTask] = useState("");

  //importing states from store
  const { addTask } = useStore((state) => state)

  const { deleteTask } = useStore((state) => state)

  const { completeTask } = useState((state) => state)

  const { tasks } = useStore((state) => state)

  localStorage.setItem("tasks", JSON.stringify(tasks))
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-slate-400 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest font-serif text-center text-5xl">TO DO LIST</h1>
          <div className="flex mt-4">
            <input value={task}
              type="text"
              onChange={(e) => {
                //update state on changes to text
                setTask(e.target.value);
              }}
              placeholder="Enter a new task" className=" shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-yellow-400 font-serif"
              onClick={() => {
                //execute function to add new todo to the list
                if (task.length > 0) {
                  addTask(task);
                  setTask("")
                } else {
                  alert("Please input task")
                }
              }}>
              ADD
            </button>
          </div>
        </div>
        <div>
          {tasks.map((task, index) => {
            return (
              <div className="flex mb-4 items-center" key={index}>
                <p className="w-full text-grey-darkest">{task.time} | {task.text}</p>          
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-900" onClick={() => { deleteTask(task.id) }}>Remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  );
}

export default App;