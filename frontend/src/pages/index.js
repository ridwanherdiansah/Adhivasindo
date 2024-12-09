export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white p-4">
        <div className="mb-4 text-xl font-bold">Adhivasindo</div>
        <nav className="space-y-4">
          <a href="#" className="block px-4 py-2 bg-indigo-700 rounded">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2">
            Modul
          </a>
          <a href="#" className="block px-4 py-2">
            Peserta
          </a>
          <a href="#" className="block px-4 py-2">
            Group Chat
          </a>
        </nav>
        <div className="mt-8">
          <a href="#" className="block text-red-500">Log Out</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Learning Management System</h1>
          <input 
            type="text" 
            className="border rounded px-2 py-1" 
            placeholder="Cari sesuatu..." 
          />
        </header>


        {/* Content */}
        <div className="space-y-6">
          {/* Top Section */}
          <div className="bg-violet-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold text-white">Pemrograman Frontend Modern</h2>
            <h2 className="text-lg font-bold text-white">Dengan React dan Angular</h2>
            <p className="text-white text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <div className="mb-6 flex justify-between items-center">
              <div className="flex items-center">
                <p className="text-white">Pemateri By Josep</p>
                <p className="text-white mx-4">14-06-2025</p>
              </div>
              <button className="mt-4 px-4 py-2 bg-white text-slate-950 rounded">
                  Mulai Learning
                </button>
            </div>
        
          </div>

          {/* Modul Kompetensi */}
          <section>
            <h2 className="text-xl font-bold mb-4">Modul Kompetensi</h2>
            <div className="grid grid-cols-3 gap-4">

              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold border p-4 rounded-lg text-center">Pemrograman</h3>
                <p>Belajar membuat aplikasi web</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold border p-4 bg-red-400 rounded-lg text-center">Creative Marketing</h3>
                <p>Strategi pemasaran digital</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold border p-4 bg-yellow-400 rounded-lg text-center">Manajemen SDM</h3>
                <p>Mengelola tim kerja</p>
              </div>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
