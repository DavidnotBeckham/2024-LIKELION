import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (todoText, source) => {
    if (!todoText) return;
    const updatedTodos = [...todos, { text: todoText, completed: false, highlighted: false }];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  
    // 만약 소스가 "add-btn1"인 경우, 추가된 할 일에 대해 강조 토글을 실행.
    if (source === "add-btn1") {
      const lastIndex = updatedTodos.length - 1;
      toggleHighlight(lastIndex);
    }
  };
  

  const removeTodo = (todoText) => {
    const updatedTodos = todos.filter(todo => todo.text !== todoText);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleHighlight = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].highlighted = !updatedTodos[index].highlighted;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="container">
      <h1>할 일 목록</h1>
      <div className="box">
        <div className="addbox">
          <input placeholder="할 일을 입력하세요" id="inputField" />
          <button className="add-btn1" onClick={() => addTodo(document.getElementById("inputField").value)}>추가하기</button>
          <button className="add-btn2" onClick={() => addTodo(document.getElementById("inputField").value)}>+</button>
        </div>
        <div className="list-container">
          <div className="list-box">
            <span className="subtitle">To Do List</span>
            <div id="list">
              {todos.map((todo, index) => (
                <div className={todo.highlighted ? "added-form highlight" : "added-form"} key={index}>
                  <button className="mark-btn" onClick={() => toggleHighlight(index)}>⭐</button>
                  <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</label>
                  <button className="delete-btn" onClick={() => removeTodo(todo.text)}>🗑</button>
                  <input type="checkbox" className="checkbox" checked={todo.completed} onChange={() => toggleCompletion(index)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;