import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContex/context/UserContext";
import { HomePage } from "../../src/09-useContex/HomePage";

describe("Pruebas en el componente HomePage", () => {
  const user = {
    id: 1,
    name: "Pablo",
  };

  test("should mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
