import MovieCard from "../components/MovieCard";
import { movies } from "../data";
import MovieGallery from "../components/MovieGallery";
// import { Link } from 'react-router-dom';
// import React from "react";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <div classname="mx-auto mt-8 max-w-5xl">
        {movies.slice(0,3).map(m => (
          <MovieCard key={m.id} title={m.title} year={m.year} />
        ))}
      </div>
      <h2 classname="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
      <div classname="mx-aoto mt-8 max-w-md">
        <MovieGallery />
      </div>
    
    </div>
  );
}

export default Home;