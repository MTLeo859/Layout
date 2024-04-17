import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end">
        <div className="mr-4">
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">Acerca de</Link>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">¡Bienvenido a mi página!</h1>
      <p className="text-lg text-center">Bienvenido a mi página personal. Soy Leonardo Jesus Morales Trejo</p>
    </div>
  );
};

export default Home;
