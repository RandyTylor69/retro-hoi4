import { statesData } from "../data/StatesData.ts";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App.tsx";

export default function Map() {
  const context = useContext(ThemeContext);
  if (!context) throw console.error("Missing Context");
  const { setConstQueue, constQueue, states, setStates } = context;
  const [tempState, setTempState] = useState<string>("");
  const [tempAmount, setTempAmount] = useState<number>(0);
  const MAX_SLOT = 8;

  function printConstQueue() {
    for (let i = 0; i < constQueue.length; i++) {
      console.log(constQueue[i]);
    }
  }

  function handleConstructionClick(
    e: React.MouseEvent<SVGPathElement, MouseEvent>,
    stateName: string
  ) {
    // 1. Check if state's buiding slot is full.
    const targetState = states.find((e) => e.name == stateName);

    if (targetState!.civCount + targetState!.milCount >= MAX_SLOT) {
      console.log("State building slot is full.");
      return;
    }
    // 1.1 Check if the already constructing MAX_SLOT buildings in this state.
    for (let i = 0; i < constQueue.length; i++) {
      if (constQueue[i].name == targetState!.name) {
        if (constQueue[i].amount == MAX_SLOT) {
          console.log("Already building max number of slots in this state.");
          return;
        }
      }
    }

    // 2. Detect shift click.
    if (e.shiftKey) {
      // Check if already building in this state.
      for (let i = 0; i < constQueue.length; i++) {
        if (constQueue[i].name == stateName) {
          setConstQueue((prev) =>
            prev.map((j) =>
              j.name == stateName
                ? { ...j, amount: MAX_SLOT - targetState!.civCount }
                : j
            )
          );
          setTempAmount(MAX_SLOT - constQueue[i].amount);
          setTempState(stateName);
          return;
        }
      }
      // If not already building in this state, build to max slot.
      setConstQueue((prev) => [
        ...prev,
        {
          building: "civ",
          name: stateName,
          amount: MAX_SLOT,
        },
      ]);
      setTempAmount(MAX_SLOT);
      setTempState(stateName);
    } else {
      // 3. building 1 factory at a time
      setTempAmount(1);
      // Check if already building in this state.
      for (let i = 0; i < constQueue.length; i++) {
        if (constQueue[i].name == stateName) {
          setConstQueue((prev) =>
            prev.map((j) =>
              j.name == stateName ? { ...j, amount: j.amount + 1 } : j
            )
          );
          setTempState(stateName);

          return;
        }
      }
      // If not already building in this state, build to max slot.
      setConstQueue((prev) => [
        ...prev,
        {
          building: "civ",
          name: stateName,
          amount: 1,
        },
      ]);

      setTempState(stateName);
    }
  }

  useEffect(() => {
    if (constQueue.length > 0) {
      console.log(
        "Added",
        tempAmount,
        "civs to",
        tempState,
        ". Current construction queue:"
      );

      printConstQueue();
    }
  }, [constQueue]);

  return (
    <svg
      width="1292"
      height="832"
      viewBox="0 0 1292 832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 1" clipPath="url(#clip0_2008_421)">
        {statesData.map((state) => (
          <path
            key={state.id}
            fillRule="evenodd"
            clipRule="evenodd"
            d={state.d}
            className="fill-[#9AAE79] hover:fill-[#C4D99C] stroke-black stroke-2 cursor-pointer
            drop-shadow-xl duration-100 ease-out"
            onClick={(e) => handleConstructionClick(e, state.id)}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_2008_421">
          <rect width="1292" height="832" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
