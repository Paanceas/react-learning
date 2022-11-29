import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { UseCounter } from "../../src/hooks/useCounter";

describe("Prueba en el useCounter", () => {
  test("should retornar los valores por defecto", () => {
    const { result } = renderHook(() => UseCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should Generar el counter con el valor de 100", () => {
    const oneHundred = 100;
    const { result } = renderHook(() => UseCounter(oneHundred));
    const { counter } = result.current;
    expect(counter).toBe(oneHundred);
  });

  test("should incrementar el contador", () => {
    const { result } = renderHook(() => UseCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(13);
  });

  test("should decrementar el contador", () => {
    const { result } = renderHook(() => UseCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(9);
  });

  test("should decrementar el contador", () => {
    const { result } = renderHook(() => UseCounter());
    const { reset, decrement } = result.current;

    act(() => {
      decrement();
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
