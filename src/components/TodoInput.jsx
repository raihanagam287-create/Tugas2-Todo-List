import { useState } from 'react'

function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-8"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tulis todo baru..."
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-body text-sm sm:text-base text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        className="rounded-xl bg-accent-500 hover:bg-accent-400 active:scale-[0.98] transition px-6 py-3 font-body font-semibold text-sm sm:text-base text-white shadow-sm"
      >
        + Tambah
      </button>
    </form>
  )
}

export default TodoInput
