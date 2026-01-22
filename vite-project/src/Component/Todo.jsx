import {useState} from 'react';
import Todoitem from "../Component/Todoitem"
import styles from '../Component/Form.module.css'
 
export default function App()
{
   const [todo, setTodo] = useState("");
   const [todos, setTodos] = useState([]);
   

   function handleSubmit(e){
    e.preventDefault();
    setTodos([...todos,{text:todo , done:false}]);
    setTodo("")
    
   }

   function handleDelete(index){
    const newTodos = todos.filter((_,i) => i !== index); // filter is used to passing an condition and (_) = means unused variable 
     setTodos(newTodos);
   }

   function handleToggleDone(index){
    const newTodos = todos.map((t, i) =>
        i === index ? {...t, done: !t.done}:t
    );
    setTodos(newTodos);
    }
   

   return(
    <div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input placeholder="Enter the Task" className={styles.input}
            onChange={(e) => setTodo(e.target.value)}
            
            value={todo} type="text" 
                    />
                                <button type="submit" className={styles.add}>Add</button>

            
        </form>
        
   
        {todos.map((item, index) =>(
               <Todoitem
                key={index} index={index} item={item}
                onDelete={handleDelete}
                onToggleDone = {handleToggleDone}/>
        ))}
    


    </div>
   )
}