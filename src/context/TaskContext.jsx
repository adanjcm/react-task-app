// "API Context" da contexto de todos los componentes, se comparte. Principal
import { createContext, useState, useEffect } from "react"; // importamos useState p/funcione
import { tasks as data } from "../data/tasks"; // archivo de datos (tasks)

export const TaskContext = createContext(); // nombre del contexto

export function TaskContextProvider(props) {
  // componente q engloba a todo
  const [tasks, setTasks] = useState([]); // nuevo array tasks vacio (contexto -task-)

  function createTask(task) {
    // recibe objeto c/propiedades
    setTasks([
      // las agrega al array de objetos
      ...tasks, // existente, un nuevo objeto con estas propiedades/valores
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); // true se queda
  }

  useEffect(() => {
    setTasks(data); // se llena el array con los datos del array original
  }, []); // solo se ejecuta una vez c/carga el componente

  return (
    // *creamos ese componente global -contexto naranja- y le pasamos la propiedad value c/propiedades y valores del objeto -variables y funciones  a compartir*
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children} {/* componente  <App /> -contiende la apliacion -*/}
    </TaskContext.Provider>
  );
}
