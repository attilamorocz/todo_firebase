import { db } from "./firebaseApp";
import {
  onSnapshot, collection, doc,
  updateDoc, deleteDoc, serverTimestamp,
  addDoc, query, orderBy} from "firebase/firestore";


export const readTodos = (setTodos) => {
  const collectionRef = collection(db, "todolist");
  const q = query(collectionRef, orderBy('timestamp', 'desc'))
  const unsubscribe = onSnapshot(q,(snapshot) => {
       setTodos(snapshot.docs.map(doc => ({...doc.data(),id: doc.id}) ));
      
})
  return unsubscribe; 
}

export const doneTodo = async (id, done) => {
  const docRef = doc(db, "todolist", id);
  done = done ? false : true;
  updateDoc(docRef, { done });
};

export const deleteTodo = async (id) => {
  const docRef = doc(db, "todolist", id);
  await deleteDoc(docRef);
};
export const addTodo = async (input) => {
  const collectionRef = collection(db, "todolist");
  const newTodo = { todo: input, done: false, timestamp: serverTimestamp() };
  /*const newDoc = */ await addDoc(collectionRef, newTodo);
  //console.log(newDoc.id);
};

export const editTodo = async (id, todo) => {
  const docRef = doc(db, "todolist", id);
  //setDoc(docRef, )
  updateDoc(docRef, { todo });
};