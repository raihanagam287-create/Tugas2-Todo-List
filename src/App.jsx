import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Hooks', completed: false },
    { id: 2, text: 'Styling dengan Tailwind CSS', completed: false },
    { id: 3, text: 'Push ke GitHub', completed: false },
  ])

  const remainingCount = todos.filter((todo) => !todo.completed).length

  // useEffect: update judul halaman setiap jumlah todo (belum selesai) berubah
  useEffect(() => {
    document.title =
      remainingCount > 0
        ? `(${remainingCount}) Todo List`
        : 'Todo List - Semua selesai!'
  }, [remainingCount])

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos((prev) => [...prev, newTodo])
  }

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleEdit = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <Header remainingCount={remainingCount} />

        <main className="bg-white/50 rounded-2xl">
          <TodoInput onAdd={handleAdd} />

          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-display text-lg font-semibold text-slate-700">
              Daftar Tugas
            </h2>
            <span className="font-body text-xs sm:text-sm font-medium text-white bg-brand-500 rounded-full px-3 py-1">
              {remainingCount} belum selesai
            </span>
          </div>

          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </main>

        <footer className="text-center mt-10">
          <p className="font-body text-xs text-slate-400">
            Dibuat dengan React &amp; Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
