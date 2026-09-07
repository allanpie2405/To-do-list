import { Library, Trash2Icon } from "lucide-react"

function TaskViewer(props) {
    return (
        <div className="bg-vanillaCream p-4 rounded-md">
            <ul className="space-y-1">
                {props.tasks.map((task) => (
                    <li className="bg-midnightIndigo text-vanillaCream rounded-md p-1"
                        key={task.id}>{task.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TaskViewer