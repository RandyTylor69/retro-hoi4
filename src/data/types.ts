export type ConstObjectType = {
    building : string; // mil, civ
    name: string; // franken, brandenburg, sachsen
    amount: number; // MAX: 8
}

export type StateType = {
    name: string; // franken, brandenburg, sachsen
    civCount: number;
    milCount: number; 
}

export type ThemeContextType = {
  constQueue: ConstObjectType[];
  setConstQueue: React.Dispatch<React.SetStateAction<ConstObjectType[]>>;
  states: StateType[];
  setStates: React.Dispatch<React.SetStateAction<StateType[]>>;
};