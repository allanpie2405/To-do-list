    
import { useState } from "react";

function AddTask({ addTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim()) {
            return;
        }

        addTask(title, description);

        setTitle("");
        setDescription("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-500 rounded-md p-4"
        >
            <div className="flex flex-col mb-3">
                <label
                    htmlFor="titulo"
                    className="text-white mb-1"
                >
                    Título
                </label>

                <input
                    id="titulo"
                    type="text"
                    placeholder="Título da tarefa"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="bg-white rounded-md p-2 outline-none"
                />
            </div>

            <div className="flex flex-col mb-3">
                <label
                    htmlFor="descricao"
                    className="text-white mb-1"
                >
                    Descrição
                </label>

                <textarea
                    id="descricao"
                    placeholder="Descrição da tarefa"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="bg-white rounded-md p-2 outline-none resize-none"
                    rows="3"
                />
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md px-4 py-2 w-full transition"
            >
                Adicionar tarefa
            </button>
        </form>
    );
}

export default AddTask;

