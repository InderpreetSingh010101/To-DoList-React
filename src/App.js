
import './App.css';
import { Todos } from './MyComponets/Todos';
import { useEffect, useState  } from 'react';
import { AddTodo } from './MyComponets/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import { About } from './MyComponets/About';
import { render } from "react-dom";
function App() {

    let initTodo;
    if(localStorage.getItem("todos") === null){
      initTodo = [];
      console.log(initTodo + "null");

    }else{
      initTodo = JSON.parse(localStorage.getItem("todos"));
       console.log(initTodo);

    }

  const onDelete = (a)=>{
    // console.log("I am Delete") ;
    console.log(a) ;
   
    setTodos(todoS.filter( (e)=>{
      return e!==a ;
    }));
    localStorage.setItem("todos" , JSON.stringify(todoS));

  }

  const addTodo = (title , desc)=>{
     let sno;
    if(todoS.length === 0){
       sno = 1 ; 
     }else{
     sno = todoS[todoS.length-1].sno + 1  ;}
    const myTodo =
      {
       sno: sno,
       title: title,
       desc: desc,
    }
  
  console.log("Adding Todo to list" , myTodo );
   setTodos([...todoS,myTodo]);

   

  }
  //  console.log(initTodo , "For set");
  const [todoS, setTodos] = useState(initTodo);

  useEffect( ()=>{
    localStorage.setItem("todos" , JSON.stringify(todoS));
    console.log("useEffect is called");
  },[todoS])


  return(

   <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={
            <>
            
               
            {/* <div><h4>My Custom jugad App</h4></div> */}
   {/* <div>Now to add bootstrap</div> */}
    <AddTodo addTodo ={addTodo}/>
    <Todos  todoList = {todoS} onDelete ={onDelete}/>  
    {/* ^^ This  is how to pass elemnts */}
              
            )
            </>
          }>
      </Route>
    <Route path="about" element={<About />} />       
    </Routes>
  </BrowserRouter>,
   </>
  );
}

export default App;
