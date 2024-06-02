import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    'Create Guest Experience mobile check-in',
    'Document current CI/CD process',
    'Perform Code Review for final Pillow-Talk release',
    'Implement new Color Palette from Design Team',
    'Fix image uploading process for guest check-in',
    'Provide on-boarding documentation'
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <div className="w-full max-w-md">
        <h1 className="text-center text-2xl mb-6">Chores ToDo List</h1>
        <ul className="mb-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{todo}</span>
              </div>
              <button onClick={() => handleDeleteTodo(index)} className="text-red-500">
                🗑
              </button>
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            className="w-full p-2 text-black rounded"
            placeholder="Add todo"
          />
        </div>
        <button onClick={handleAddTodo} className="w-full py-2 bg-blue-500 hover:bg-blue-700 rounded text-white">
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default TodoList;
