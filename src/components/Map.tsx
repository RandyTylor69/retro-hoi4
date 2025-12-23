import {statesData} from "../data/StatesData.ts"

export default function Map() {

    

  return (
    <svg
      width="1292"
      height="832"
      viewBox="0 0 1292 832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 1" clip-path="url(#clip0_2008_421)">
        {statesData.map((state) => (
          <path
            id={state.id}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d={state.d}
            className="fill-[#9AAE79] hover:fill-[#C4D99C] stroke-black stroke-2 cursor-pointer
            drop-shadow-xl duration-100 ease-out"
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
