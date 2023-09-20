import './App.css'
import React,{useEffect} from 'react'
import {db} from './firebaseApp'
import {onSnapshot,collection} from 'firebase/firestore'

function App() {
  useEffect(()=>{
    const unsubscribe= onSnapshot(collection(db,'todolist'),(snapshot)=>{
       // console.log(snapshot.docs);
       console.log(snapshot.docs.map(doc=>doc.data()));
      return ()=>unsubscribe()
    })
  },[])
  return (
    <div>
      <h1>My Todos</h1>
    </div>
  )
}

export default App
