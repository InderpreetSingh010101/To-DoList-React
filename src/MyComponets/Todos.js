
import React from 'react';
import { TodoItem } from './TodoItem';


export const  Todos = (props)=> {
   const Mstyle = {
     minHeight:"58vh"
   }
    return (
     <>
     
     
     
     
     
     {/* <div>TodoS wORKS</div> */}
      <div className="container"style={Mstyle}> 
      <h4 className="text my-4" >To Do List </h4>
      
      { props.todoList.length ===0 ? "Empty List" :
      props.todoList.map((a)=>{

        return <TodoItem Item={a} onDelete ={ props.onDelete} />
      })
      
      }

      

      </div>


     
  
      
  
  
  
     </>
    );
  }