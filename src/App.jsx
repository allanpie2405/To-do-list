import { useState } from "react"
import TaskViewer from "./components/TaskViewer"

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
        { id: 4, title: "Task 4", completed: false },
    ])

    return (
        <div className="w-screen h-screen flex justify-center">
            <div className="w-[500px]">
                <TaskViewer tasks={tasks} />
            </div>
        </div>
    )
}
export default App