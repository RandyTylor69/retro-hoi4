import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";
import { type ConstObjectType } from "../data/types";

export default function ConstQueue() {
  const context = useContext(ThemeContext);
  if (!context) console.error("Context missing");

  const { constQueue } = context;

  function capitalize(str:string){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <article
      className="h-120 w-250 max-w-screen bg-[#252422]
     outline-1 outline-white/30 font-display"
    >
      <header className="h-20 w-full bg-black/30 p-4 flex items-center">
        <h1
          className="text-white/80 text-3xl
           ml-8"
        >
          C O N S T R U C T I O N
        </h1>
      </header>

      <section
        className="h-100 w-full gap-1 pt-1
      flex flex-col overflow-auto "
      >
        {constQueue.map((q: ConstObjectType) => (
          <div
            className="h-14 w-full bg-white/5 px-12
          flex items-center drop-shadow-[0_25px_25px_#000000] shrink-0"
            key={q.name}
          >
            <div className="h-full w-80 flex items-center">
              <h1 className="text-white/80 text-lg">{capitalize(q.name)}</h1>
            </div>
            
            <div className="h-full w-20 flex items-center">
              <img src="public\assets\civ.png" />
            </div>

            <div className="h-full w-20 flex items-center">
              <h1 className="text-white/80 text-lg">{q.amount}/15</h1>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
