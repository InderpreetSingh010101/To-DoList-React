import React, { useState } from 'react';



export const AddTodo = (props)=> {
    const [title , setTitle]  = useState("");
    const [desc , setDesc]  = useState("");


    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Desc is Blank");
        }else
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");

    }
    
    return (
    <> 
            <div className="container my-2">
                 <h4>Add To DO</h4> 

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="TodoTitle">To-do Title</label>
                    <input type="text" value={title} onChange ={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Desc</label>
                    <input type="text" value={desc} onChange ={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>

            </div>
     </>
    );
  }