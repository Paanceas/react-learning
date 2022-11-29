import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContex/MainApp";

describe("Pruebas en el componente MainApp", () => {
  test("should de mostrar el componente HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test("should de mostrar el componente LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });

  test("should de mostrar el componente AboutPage", () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('AboutPage')).toBeTruthy();
  });


  test("should de mostrar el componente HomePage", () => {
    render(
      <MemoryRouter initialEntries={['/asd']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('HomePage')).toBeTruthy();
  });

});
