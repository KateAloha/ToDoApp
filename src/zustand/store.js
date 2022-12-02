import create from "zustand";
import { uid } from "react-uid"

const day = new Date()

const useStore = create((set) => ({
    tasks: JSON.parse(window.localStorage.getItem('tasks')) ?? [],
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks,
        {
            text: task,
            id: uid(`${task}-${state.tasks.length}`),
            isDone: false,
            time: day.toLocaleDateString()
        }
        ]
    })),
    deleteTask: (taskId) => set(state => ({
        tasks: state.tasks.filter(task => task.id != taskId)
    })),
    

}))

export default useStore
