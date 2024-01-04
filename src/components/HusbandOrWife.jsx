import { useContext } from "react";
import RelativeContext from "../context/RelativeContext";

function HusbandOrWife() {
  const { husbandOrWife, setHusbandOrWife, setStep } =
    useContext(RelativeContext);

  function handleSubmit(e) {
    e.preventDefault();
    setStep((s) => s + 1);
  }

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">મરનારને પતિ કે પત્ની છે?</label>
          <select
            value={husbandOrWife}
            onChange={(e) => setHusbandOrWife(Number(e.target.value))}
            className="form-select"
          >
            <option value="1">હા</option>
            <option value="0">ના</option>
          </select>
        </div>
        {husbandOrWife !== 0 && (
          <div className="mb-3">
            <label className="form-label">મરનારને પતિ છે કે પત્ની?</label>
            <select
              value={husbandOrWife}
              onChange={(e) => setHusbandOrWife(Number(e.target.value))}
              className="form-select"
            >
              <option value="1">પત્ની</option>
              <option value="2">પતિ</option>
            </select>
          </div>
        )}
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

export default HusbandOrWife;
