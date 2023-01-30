import { useState, useContext } from "react"; // p/usar contexto
import { TaskContext } from "../context/TaskContext"; // importo contexto

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // uso contexto y estructuro y solo quiero fn createTask
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description }); // enviamos objeto con estas propiedades
    setTitle(""); // resetea a vacio los inputs despues de
    setDescription(""); // enviar los valores de la fn createTask
  };

  return (
    <div className="max-w-md mx-auto"> {/*centra tarjetas*/}
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
