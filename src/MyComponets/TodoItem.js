import React from 'react';


export const  TodoItem = (props)=> {
    return (
     <>
     
    
     <div className="my-4">
     
     
     <h5>{props.Item.sno}</h5>
     <p>{props.Item.title}</p>
    <p>{props.Item.desc}</p>
    <button type="button" class="btn btn-sm btn-danger" onClick ={()=>{props.onDelete(props.Item)}} >Delete</button>
    <hr></hr>
      
    </div>
  
  
     </>
    );
  }