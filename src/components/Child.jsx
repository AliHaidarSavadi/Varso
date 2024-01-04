import { useContext } from "react";
import RelativeContext from "../context/RelativeContext";

function Child() {
  const { child, setChild, daughter, setDaughter, son, setSon, setStep } =
    useContext(RelativeContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (child === 1 && daughter === 0 && son === 0) return;
    setStep((s) => s + 1);
  }

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">મરનારની ઓલાદ છે?</label>
          <select
            value={child}
            onChange={(e) => {
              setChild(Number(e.target.value));
              if (Number(e.target.value) === 0) {
                setDaughter(0);
                setSon(0);
              }
            }}
            className="form-select"
          >
            <option value="0">ના</option>
            <option value="1">હા</option>
          </select>
        </div>
        {child === 1 && (
          <>
            <div className="mb-3">
              <label className="form-label">મરનારની કેટલી દીકરીઓ છે?</label>
              <select
                value={daughter}
                onChange={(e) => setDaughter(Number(e.target.value))}
                className="form-select"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">મરનારના કેટલા દીકરાઓ છે?</label>
              <select
                value={son}
                onChange={(e) => setSon(Number(e.target.value))}
                className="form-select"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary" type="button" disabled>
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

export default Child;
