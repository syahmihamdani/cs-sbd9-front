import React from "react";
import Navbar from "../components/Navbar";
import ItemsList from "../components/ItemsList";

function Home() {

  return (
    <div id="home" className="min-h-screen bg-gray-100 dark:bg-color-darkblue transition">
      <Navbar />
      <main className="px-10 w-screen">
        <h1 id="explore" className="text-2xl font-bold mt-10 mb-10 text-black text-center dark:text-white width-full">Explore Products</h1>
        <ItemsList />
      </main>
    </div>

  );
}

export default Home;
