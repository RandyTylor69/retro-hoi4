import "./App.css";
import Map from "./components/Map.tsx";
function App() {
  return (
    <main className="h-screen w-screen">
      <div
        id="map-wrapper"
        className="flex justify-center items-center
      h-full w-full bg-[#697754]"
      >
        <Map />
      </div>
    </main>
  );
}

export default App;
