"use client";
import { useReducer, useState } from "react";
import Link from "next/link";
export default function CounterApp() {
  let [activeurl] = useState("/counter");

  type initalstate = {
    value: number;
    plusicon: boolean;
    minusicon: boolean;
  };

  let initialState: initalstate = {
    value: 0,
    plusicon: false,
    minusicon: false,
  };
  let INCREMENT = "INCREMENT";
  let DECREMENT = "DECREMENT";
  let RESET = "RESET";
  function reducer(state: initalstate, action: any) {
    if (action.type == INCREMENT) {
      //  console.log(state.plusicon);
      return {
        ...state,
        value: state.value + 1,

        plusicon: true,
        minusicon: false,

        //value: state.value > 0 ? state.plusicon : true,
      };
    }

    if (action.type === DECREMENT) {
      return {
        ...state,
        value: state.value - 1,
        minusicon: true,
        plusicon: false,
      };
    }

    if (action.type === RESET) {
      return {
        ...state,
        value: 0,
        plusicon: false,
        minusicon: false,
      };
    }
    if (action.type == INCREMENT && state.value > 0) {
      console.log(state.plusicon);

      return {
        ...state,

        plusicon: true,
        minusicon: false,
      };
    }
    return state;
  }

  let [state, dispatch] = useReducer(reducer, initialState);

  //   function choosecolor(color: string) {
  //     if (state.value > 0 && state.color === "green") {
  //       console.log(state.value, state.color);
  //       return color;
  //     } else if (state.value < 0 && state.color === "red") {
  //       console.log(state.value, state.color);
  //       return color;
  //     } else {
  //       return color;
  //     }
  //   }

  return (
    <section className="h-screen p-6 flex items-center justify-center flex-col gap-6 bg-slate-300 relative">
      <div className="breadcrumbs p-6 text-lg mr-auto absolute left-3 top-6">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              Counter App
            </Link>
          </li>
        </ul>
      </div>
      <p className=" text-black text-center text-4xl">Counter App</p>
      <div className="mt-6 counter-box bg-white rounded-md shadow-xl flex justify-center items-center flex-col gap-6 lg:w-auto md:w-auto w-72 lg:h-auto md:h-auto h-60">
        <p className="text-7xl font-bold lg:p-6">
          <span
            className={`${
              state.plusicon
                ? "text-green-500"
                : state.minusicon
                ? "text-red-500"
                : "text-black"
            }
           
            `}
          >
            {state.value}
          </span>
        </p>
        <div className="btn-container flex items-center flex-wrap justify-center gap-5 lg:p-6 md:p-6 p-1">
          <button
            className="btn  bg-green-500 text-white w-32"
            onClick={() => dispatch({ type: INCREMENT })}
          >
            Increase
          </button>
          <button
            className="btn bg-black text-white bg- w-32"
            onClick={() => dispatch({ type: RESET })}
          >
            Reset
          </button>
          <button
            className="btn bg-red-500  text-white bg- w-32"
            onClick={() => dispatch({ type: DECREMENT })}
          >
            Decrease
          </button>
        </div>
      </div>
    </section>
  );
}
