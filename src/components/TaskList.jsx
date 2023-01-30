import TaskCard from "./TaskCard";
import { useContext } from "react"; // importamos contexto (TaskContext) para usar
import { TaskContext } from "../context/TaskContext"; // importo nombre de contexto

function TaskList() {
  // ahora puedes acceder directamente al contexto (TaskContext)

  // uso contexto y extraigo s/tasks del objeto de valores (value) de TaskContext
  const { tasks } = useContext(TaskContext); 

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} /> // key c/elemento y envio objetos
      ))}
    </div>
  );
}

export default TaskList;
