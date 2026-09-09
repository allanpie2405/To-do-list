
import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Estudar ingles",description: "verbo to be", completed: false },
        { id: 2, title: "cozinhar",description:"Frango assado", completed: false },
        { id: 3, title: "Fazer dever de casa",description:"atividade de matematica", completed: false }
    ]);

    function addTask(taskTitle, taskDescription) {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDescription,
            completed: false
        };

        setTasks([...tasks, newTask]);
    }

    function onClickTask(taskId) {
        const newTask = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }

            return task;
        });

        setTasks(newTask);
    }

    function onClickDeleteTask(taskId) {
        const newTask = tasks.filter((task) => task.id !== taskId);
        setTasks(newTask);
    }

    return (
        <div className="w-screen h-screen flex justify-center p-6">
            <div className="w-[500px] space-y-2">

                <h1 className="text-2xl text-center font-bold">
                    Lista de Tarefas
                </h1>

                <AddTask addTask={addTask} />

                <TaskList
                    tasks={tasks}
                    onClickTask={onClickTask}
                    onClickDeleteTask={onClickDeleteTask}
                />

            </div>
        </div>
    );
}

export default App;

