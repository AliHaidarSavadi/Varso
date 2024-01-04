import { useContext, useEffect, useReducer } from "react";
import RelativeContext from "../context/RelativeContext";

const initialState = {
  wife: 0,
  husband: 0,
  mother: 0,
  father: 0,
  daughter: 0,
  son: 0,
  remaining: 100,
};

function reducer(state, action) {
  switch (action.type) {
    case "wife mother father":
      return {
        ...state,
        wife: 25,
        mother: 33.33,
        father: 100 - 25 - 33.33,
        remaining: 0,
      };
    case "wife mother":
      return { ...state, wife: 25, mother: 100 - 25, remaining: 0 };
    case "wife father":
      return { ...state, wife: 25, father: 100 - 25, remaining: 0 };
    case "only wife":
      return { ...state, wife: 25, remaining: 100 - 25 };
    case "husband mother father":
      return {
        ...state,
        husband: 50,
        mother: 33.33,
        father: 100 - 50 - 33.33,
        remaining: 0,
      };
    case "husband mother":
      return { ...state, husband: 50, mother: 100 - 50, remaining: 0 };
    case "husband father":
      return { ...state, husband: 50, father: 100 - 50, remaining: 0 };
    case "only husband":
      return { ...state, husband: 50, remaining: 100 - 50 };
    case "mother father":
      return { ...state, mother: 33.33, father: 100 - 33.33, remaining: 0 };
    case "only mother":
      return { ...state, mother: 100, remaining: 0 };
    case "only father":
      return { ...state, father: 100, remaining: 0 };
    case "no one from first stage":
      return state;
    case "wife mother father wd":
      return {
        ...state,
        wife: 12.5,
        mother: 17.5,
        father: 17.5,
        daughter: 52.5,
        remaining: 0,
      };
    case "wife mother wd":
      return {
        ...state,
        wife: 12.5,
        mother: 21.875,
        daughter: 65.625,
        remaining: 0,
      };
    case "wife father wd":
      return {
        ...state,
        wife: 12.5,
        father: 21.875,
        daughter: 65.625,
        remaining: 0,
      };
    case "husband mother wd":
      return {
        ...state,
        husband: 25,
        mother: 18.75,
        daughter: 56.25,
        remaining: 0,
      };
    case "husband father wd":
      return {
        ...state,
        husband: 25,
        father: 18.75,
        daughter: 56.25,
        remaining: 0,
      };
    case "mother father wd":
      return { ...state, mother: 20, father: 20, daughter: 60, remaining: 0 };
    case "only mother wd":
      return { ...state, mother: 25, daughter: 75, remaining: 0 };
    case "only father wd":
      return { ...state, father: 25, daughter: 75, remaining: 0 };
    case "wife mother father wc":
      return {
        ...state,
        wife: 12.5,
        mother: 16.66,
        father: 16.66,
        daughter: (100 - 12.5 - 16.66 - 16.66) / action.id,
        son: ((100 - 12.5 - 16.66 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "wife mother wc":
      return {
        ...state,
        wife: 12.5,
        mother: 16.66,
        daughter: (100 - 12.5 - 16.66) / action.id,
        son: ((100 - 12.5 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "wife father wc":
      return {
        ...state,
        wife: 12.5,
        father: 16.66,
        daughter: (100 - 12.5 - 16.66) / action.id,
        son: ((100 - 12.5 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "only wife wc":
      return {
        ...state,
        wife: 12.5,
        daughter: (100 - 12.5) / action.id,
        son: ((100 - 12.5) * 2) / action.id,
        remaining: 0,
      };
    case "husband mother father wc":
      return {
        ...state,
        husband: 25,
        mother: 16.66,
        father: 16.66,
        daughter: (100 - 25 - 16.66 - 16.66) / action.id,
        son: ((100 - 25 - 16.66 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "husband mother wc":
      return {
        ...state,
        husband: 25,
        mother: 16.66,
        daughter: (100 - 25 - 16.66) / action.id,
        son: ((100 - 25 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "husband father wc":
      return {
        ...state,
        husband: 25,
        father: 16.66,
        daughter: (100 - 25 - 16.66) / action.id,
        son: ((100 - 25 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "only husband wc":
      return {
        ...state,
        husband: 25,
        daughter: (100 - 25) / action.id,
        son: ((100 - 25) * 2) / action.id,
        remaining: 0,
      };
    case "mother father wc":
      return {
        ...state,
        mother: 16.66,
        father: 16.66,
        daughter: (100 - 16.66 - 16.66) / action.id,
        son: ((100 - 16.66 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "only mother wc":
      return {
        ...state,
        mother: 16.66,
        daughter: (100 - 16.66) / action.id,
        son: ((100 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "only father wc":
      return {
        ...state,
        father: 16.66,
        daughter: (100 - 16.66) / action.id,
        son: ((100 - 16.66) * 2) / action.id,
        remaining: 0,
      };
    case "only wc":
      return {
        ...state,
        daughter: 100 / action.id,
        son: (100 * 2) / action.id,
        remaining: 0,
      };
    default:
  }
}

function Answer() {
  const { child, daughter, son, husbandOrWife, mother, father, setStep } =
    useContext(RelativeContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      if (child === 0) {
        //without children
        if (husbandOrWife === 1) {
          //with wife
          if (mother === 1) {
            if (father === 1) {
              dispatch({ type: "wife mother father" });
            } else {
              dispatch({ type: "wife mother" });
            }
          } else if (father === 1) {
            dispatch({ type: "wife father" });
          } else {
            dispatch({ type: "only wife" });
          }
        } else if (husbandOrWife === 2) {
          //with husband
          if (mother === 1) {
            if (father === 1) {
              dispatch({ type: "husband mother father" });
            } else {
              dispatch({ type: "husband mother" });
            }
          } else if (father === 1) {
            dispatch({ type: "husband father" });
          } else {
            dispatch({ type: "only husband" });
          }
        } else if (mother === 1) {
          //without wife or husband
          if (father === 1) {
            dispatch({ type: "mother father" });
          } else {
            dispatch({ type: "only mother" });
          }
        } else if (father === 1) {
          dispatch({ type: "only father" });
        } else {
          dispatch({ type: "no one from first stage" });
        }
      } else if (daughter === 1 && son === 0) {
        //with only one daughter in children
        if (husbandOrWife === 1) {
          //with wife
          if (mother === 1) {
            if (father === 1) {
              dispatch({
                type: "wife mother father wd",
              });
            } else {
              dispatch({ type: "wife mother wd" });
            }
          } else if (father === 1) {
            dispatch({ type: "wife father wd" });
          } else {
            dispatch({ type: "only wife wc", id: 2 * son + daughter });
          }
        } else if (husbandOrWife === 2) {
          //with husband
          if (mother === 1) {
            if (father === 1) {
              dispatch({
                type: "husband mother father wc",
                id: 2 * son + daughter,
              });
            } else {
              dispatch({ type: "husband mother wd" });
            }
          } else if (father === 1) {
            dispatch({ type: "husband father wd" });
          } else {
            dispatch({ type: "only husband wc", id: 2 * son + daughter });
          }
        } else if (mother === 1) {
          //without wife or husband
          if (father === 1) {
            dispatch({ type: "mother father wd" });
          } else {
            dispatch({ type: "only mother wd" });
          }
        } else if (father === 1) {
          dispatch({ type: "only father wd" });
        } else {
          dispatch({ type: "only wc", id: 2 * son + daughter });
        }
      } else {
        //with children
        if (husbandOrWife === 1) {
          //with wife
          if (mother === 1) {
            if (father === 1) {
              dispatch({
                type: "wife mother father wc",
                id: 2 * son + daughter,
              });
            } else {
              dispatch({ type: "wife mother wc", id: 2 * son + daughter });
            }
          } else if (father === 1) {
            dispatch({ type: "wife father wc", id: 2 * son + daughter });
          } else {
            dispatch({ type: "only wife wc", id: 2 * son + daughter });
          }
        } else if (husbandOrWife === 2) {
          //with husband
          if (mother === 1) {
            if (father === 1) {
              dispatch({
                type: "husband mother father wc",
                id: 2 * son + daughter,
              });
            } else {
              dispatch({ type: "husband mother wc", id: 2 * son + daughter });
            }
          } else if (father === 1) {
            dispatch({ type: "husband father wc", id: 2 * son + daughter });
          } else {
            dispatch({ type: "only husband wc", id: 2 * son + daughter });
          }
        } else if (mother === 1) {
          //without wife or husband
          if (father === 1) {
            dispatch({ type: "mother father wc", id: 2 * son + daughter });
          } else {
            dispatch({ type: "only mother wc", id: 2 * son + daughter });
          }
        } else if (father === 1) {
          dispatch({ type: "only father wc", id: 2 * son + daughter });
        } else {
          dispatch({ type: "only wc", id: 2 * son + daughter });
        }
      }
    },
    [child, husbandOrWife, mother, father, daughter, son]
  );

  return (
    <div className="forms">
      <p className="fw-semibold fs-2">
        {state.wife !== 0 && `પત્નીને કુલ વારસામાંથી ${state.wife}% મળશે.`}
        {state.husband !== 0 && ` પતિને કુલ વારસામાંથી ${state.husband}% મળશે.`}
        {state.mother !== 0 && ` માને કુલ વારસામાંથી ${state.mother}% મળશે.`}
        {state.father !== 0 && ` બાપને કુલ વારસામાંથી ${state.father}% મળશે.`}
        {daughter !== 0 &&
          ` દરેક દીકરીને કુલ વારસામાંથી ${state.daughter}% મળશે (દીકરીઓ: ${daughter} છે).`}
        {son !== 0 &&
          ` દરેક દીકરાને કુલ વારસામાંથી ${state.son}% મળશે (દીકરાઓ: ${son} છે).`}
        {state.remaining !== 0 &&
          ` બાકીનો ${state.remaining}% વારસો પૌત્ર પૌત્રીઓમાં અથવા બીજા તબક્કામાં જશે.`}
      </p>
      <button className="btn btn-primary" onClick={() => setStep((s) => s - 1)}>
        Back
      </button>
    </div>
  );
}

export default Answer;
