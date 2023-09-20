import React, { useEffect } from "react";
import { db } from "../firebaseApp";
import { onSnapshot, collection } from "firebase/firestore";
import { Logout } from "./Logout";
import { useState } from "react";
import { Todo } from "./Todo";
import { List } from "@mui/material";
import { MyForm } from "./MyForm";
import { readTodos } from "../utils";

export const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const unsubscribe = readTodos(setTodos)
      return () => unsubscribe()
  }, []);

  return (
    <div className="todos">
      <h1>My Todos</h1>
      <Logout />
      <MyForm />

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:'auto',}}>
      {todos.map(obj=>
        <Todo key={obj.id} {...obj}/>
        
      )}
      </List>
    </div>
  );
};
