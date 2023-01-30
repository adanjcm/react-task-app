import { useContext } from "react"; // para poder usar contexto (TaskContext)
import { TaskContext } from "../context/TaskContext"; // importo nombre contexto

function TaskCard({ task }) {
  // recibe los objetos de funcion map del array tasks (estructuando un props) por eso { lo que queremos}, en lugar de poner props.task

  // uso el contexto (TaskContext) y estructuro,s/traigo fn deletTask del objeto (value)
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
