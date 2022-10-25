import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const props = {
    category: "One pice",
  };

  const initUseFetchGifs = {
    images: [],
    isLoading: true,
  };

  const endUseFetchGifs = {
    images: [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://gogle.com.co/img.png",
      },
      {
        id: "ABCD",
        title: "Saitama",
        url: "https://gogle.com.co/img.png",
      },
    ],
    isLoading: false,
  };

  test("debe hacer match con el snapshot del componente", () => {
    useFetchGifs.mockReturnValue(initUseFetchGifs);
    const { container } = render(<GifGrid {...props} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el loading inicial", () => {
    useFetchGifs.mockReturnValue(initUseFetchGifs);

    render(<GifGrid {...props} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(props.category)).toBeTruthy();
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    useFetchGifs.mockReturnValue(endUseFetchGifs);
    render(<GifGrid {...props} />);
    expect(screen.getAllByRole("img").length).toBe(
      endUseFetchGifs.images.length
    );
  });
});
