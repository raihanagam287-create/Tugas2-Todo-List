import TodoItem from './TodoItem.jsx'

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-xl border-2 border-dashed border-slate-200">
        <p className="font-body text-slate-400 text-sm sm:text-base">
          Belum ada todo. Tambahkan tugas pertamamu di atas.
        </p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList
