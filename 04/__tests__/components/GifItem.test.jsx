import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("pruebas en GifItem", () => {
  const props = {
    title: "Saitama",
    url: "https://google.com.co/img.png",
  };

  test("debe hacer match con el snapshot del componente", () => {
    const { container } = render(<GifItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el Alt indicado", () => {
    render(<GifItem {...props} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(props.url);
    expect(alt).toBe(props.title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem {...props} />);
    expect(screen.getByText(props.title)).toBeTruthy();
  });
});
