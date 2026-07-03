import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const handleSave = () => {
    const trimmed = draft.trim()
    if (trimmed === '') {
      setDraft(todo.text)
      setIsEditing(false)
      return
    }
    onEdit(todo.id, trimmed)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setDraft(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <li className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 shadow-sm px-4 py-3 sm:px-5 sm:py-4 hover:shadow-md transition">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 shrink-0 accent-brand-500 cursor-pointer"
      />

      {isEditing ? (
        <input
          type="text"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-lg border border-brand-300 px-3 py-1.5 font-body text-sm sm:text-base text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      ) : (
        <span
          className={`flex-1 font-body text-sm sm:text-base break-words ${
            todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => setIsEditing(true)}
          className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-body font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-body font-medium text-red-600 bg-red-50 hover:bg-red-100 transition"
        >
          Hapus
        </button>
      </div>
    </li>
  )
}

export default TodoItem
