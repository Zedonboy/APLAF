import React from "react";

export default function CSection({ cats = [], title = "Home"}) {
  return (
    <section className="flex dark:bg-black px-4 py-2">
      <div className="hidden lg:flex flex-col">
        <span className="dark:text-white font-semibold">Thursday</span>
        <span className="dark:text-white font-light text-sm">13th March, 2020</span>
      </div>
      <ul className="flex md:ml-4 overflow-x-auto items-center">
        <h1 className="text-xl dark:text-white py-4 pr-4 font-bold border-r">{title}</h1>
        {cats.map(c => (
          <li className="flex-shrink-0 px-6 py-4">
          <a href={`/category/${c.name.toLowerCase()}`} className="text-base font-light dark:text-white dark:hover:text-purple-600 hover:text-purple-600 hover:underline">{c.name}</a></li>
        ))}
        
      </ul>
    </section>
  );
}
