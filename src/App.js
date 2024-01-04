import { useState } from "react";
import RelativeContext from "./context/RelativeContext";
import Child from "./components/Child";
import HusbandOrWife from "./components/HusbandOrWife";
import MotherAndFather from "./components/MotherAndFather";
import Answer from "./components/Answer";

function App() {
  //State
  const [step, setStep] = useState(1);
  const [child, setChild] = useState(0);
  const [daughter, setDaughter] = useState(0);
  const [son, setSon] = useState(0);
  //1 means wife and 2 means husband
  const [husbandOrWife, setHusbandOrWife] = useState(0);
  const [mother, setMother] = useState(0);
  const [father, setFather] = useState(0);

  return (
    <div className="App">
      <RelativeContext.Provider
        value={{
          setStep: setStep,
          child: child,
          setChild: setChild,
          daughter: daughter,
          setDaughter: setDaughter,
          son: son,
          setSon: setSon,
          husbandOrWife: husbandOrWife,
          setHusbandOrWife: setHusbandOrWife,
          mother: mother,
          setMother: setMother,
          father: father,
          setFather: setFather,
        }}
      >
        {step === 1 && <Child />}
        {step === 2 && <HusbandOrWife />}
        {step === 3 && <MotherAndFather />}
        {step === 4 && <Answer />}
      </RelativeContext.Provider>
    </div>
  );
}

export default App;
