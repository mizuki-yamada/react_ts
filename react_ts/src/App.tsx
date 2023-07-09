import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./Todo";
import { Photo } from "./Photo"
import { TodoType } from "./types/todo";
import { PhotoType } from "./types/photo";


function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [photos, setPhotos] = useState<Array<PhotoType>>([]);
  
  const onClickFetchTodoData = () => {
    const todoUrl = "https://jsonplaceholder.typicode.com/todos";
    axios.get<Array<TodoType>>(todoUrl).then((res) => {
      setTodos(res.data);
    });
  };

  const onClickFetchPhotoData = () => {
    const photoUrl = "https://jsonplaceholder.typicode.com/photos";
    axios.get<Array<PhotoType>>(photoUrl).then((res) => {
      setPhotos(res.data);
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchTodoData}>データを取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        ></Todo>
      ))}
      <br></br>
      <button onClick={onClickFetchPhotoData}>写真を取得</button>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          title={photo.title}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
        ></Photo>
      ))}
    </div>
  );
}

export default App;
