import { UseCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = UseCounter();
  return (
    <>
        <h1>CounterWithCustomHook: {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={() => { increment(1) }}> +1 </button>
        <button className="btn btn-primary" onClick={reset}> Reset </button>
        <button className="btn btn-primary" onClick={decrement}> -1 </button>
    </>
  )
}
