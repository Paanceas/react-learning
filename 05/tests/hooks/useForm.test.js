import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "fernadno@google.com",
  };

  test("should regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: "Fernando",
      email: "fernadno@google.com",
      formState: initialForm,
      onChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onChange } = result.current;

    const newName = "Juan";

    act(() => {
      onChange({
        target: {
          name: "name",
          value: newName,
        },
      });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test("should el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onChange, onResetForm } = result.current;

    const newName = "Juan";

    act(() => {
      onChange({
        target: {
          name: "name",
          value: newName,
        },
      });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
