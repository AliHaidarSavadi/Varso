import { useContext } from "react";
import RelativeContext from "../context/RelativeContext";

function MotherAndFather() {
  const { mother, setMother, father, setFather, setStep } =
    useContext(RelativeContext);

  function handleSubmit(e) {
    e.preventDefault();
    setStep((s) => s + 1);
  }

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">મરનારને મા છે?</label>
          <select
            value={mother}
            onChange={(e) => setMother(Number(e.target.value))}
            className="form-select"
          >
            <option value="0">ના</option>
            <option value="1">હા</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">મરનારને બાપ છે?</label>
          <select
            value={father}
            onChange={(e) => setFather(Number(e.target.value))}
            className="form-select"
          >
            <option value="0">ના</option>
            <option value="1">હા</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="btn btn-primary"
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default MotherAndFather;
