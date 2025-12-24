import "./App.css";
import ConstQueue from "./components/ConstQueue.tsx";
import Map from "./components/Map.tsx";
import { useState, createContext, useEffect } from "react";
import {
  type ThemeContextType,
  type ConstObjectType,
  type StateType,
} from "./data/types.ts";
import { statesData } from "./data/StatesData.ts";

// exporting context
export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  // global states
  const [constQueue, setConstQueue] = useState<ConstObjectType[]>([]);
  const [states, setStates] = useState<StateType[]>([]);

  useEffect(() => {
    
    statesData.map(state=>setStates(prev=>[...prev, {
      name:state.id,
      civCount:0,
      milCount:0
    }]))
    
  }, []);

  return (
    <ThemeContext.Provider
      value={{ constQueue, setConstQueue, setStates, states }}
    >
      <main className="h-screen w-screen">
        <div
          id="map-wrapper"
          className="flex justify-center items-center flex-col gap-20
                   h-full w-full bg-[#697754]"
        >
          <Map />
          <ConstQueue />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
