
import { Trash2Icon } from "lucide-react";

function TaskList(props) {
    return (
        <ul className="space-y-4 p-4 bg-slate-800 rounded-md">
            {props.tasks.map((task) => {
                return (
                    <li
                        key={task.id}
                        className="flex gap-2"
                    >
                        <button
                            onClick={() => props.onClickTask(task.id)}
                            className={`
                                w-full p-3 text-white text-left rounded-md
                                transition-colors ease-in-out duration-200
                                ${
                                    task.completed
                                        ? "bg-green-400 line-through"
                                        : "bg-slate-400 hover:bg-slate-300"
                                }
                            `}
                        >
                            <p className="font-semibold">
                                {task.title}
                            </p>

                            {task.description && (
                                <p className="text-sm mt-1">
                                    {task.description}
                                </p>
                            )}
                        </button>

                        <button
                            onClick={() => props.onClickDeleteTask(task.id)}
                            className="bg-slate-400 hover:bg-red-500 rounded-md px-3 text-white transition-colors"
                        >
                            <Trash2Icon />
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default TaskList;
