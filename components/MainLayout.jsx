import React from 'react';

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-purple-500 to-purple-800 text-white text-center py-4">
        <h1 className="text-4xl font-bold">USO DE LAYOUT</h1>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 - Leonardo Jesus Morales Trejo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
