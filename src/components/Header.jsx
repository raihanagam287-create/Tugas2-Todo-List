function Header({ remainingCount }) {
  return (
    <header className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl px-6 py-8 sm:px-10 sm:py-10 shadow-lg mb-8">
      <p className="text-brand-100 font-body text-xs sm:text-sm uppercase tracking-widest mb-2">
        Personal Planner
      </p>
      <h1 className="text-white font-display text-3xl sm:text-4xl font-bold mb-3">
        Todo List Saya
      </h1>
      <p className="text-brand-50 font-body text-sm sm:text-base">
        {remainingCount === 0
          ? 'Semua tugas selesai. Kerja bagus!'
          : `${remainingCount} tugas belum selesai`}
      </p>
    </header>
  )
}

export default Header
