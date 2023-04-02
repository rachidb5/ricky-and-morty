import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../pages/index";
import { Provider } from "react-redux";
import { store } from "../state/store/store";
import { QueryClientProvider, QueryClient } from "react-query";
import "@testing-library/jest-dom";
import testData from "../../testData";
import { title } from "process";
/*
const mockFetch = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(testData)
    }));
}
*/
describe("Filtros", () => {
  //  beforeAll(mockFetch);
  //beforeEach(cleanup);

  it("Testa campo de pesquisa por nome", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const searchInput = screen.getByPlaceholderText("Insira o nome aqui");
      fireEvent.change(searchInput, { target: { value: "Summer" } });
      const button = screen.getByText("Buscar");
      fireEvent.click(button);
      const charName = screen.getAllByRole("name")[0];
      expect(charName).toBe("Summer Smith");
    });
  });

  it("Testa campo de pesquisa por especie", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const searchInput = screen.getByPlaceholderText("Insira a especie aqui");
      fireEvent.change(searchInput, { target: { value: "Alien" } });
      const button = screen.getByText("Buscar");
      fireEvent.click(button);
      const charName = screen.getAllByRole("species")[0];
      expect(charName).toBe("Alien");
    });
  });

  it("Testa campo de pesquisa por status", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const select = screen.getAllByRole("select")[0];
      fireEvent.change(select, { target: { value: "dead" } });
      const charName = screen.getAllByRole("status")[0];
      expect(charName).toBe("Dead");
    });
  });

  it("Testa campo de pesquisa por genero", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const select = screen.getAllByRole("select")[1];
      fireEvent.change(select, { target: { value: "genderless" } });
      const charName = screen.getAllByRole("name")[0];
      expect(charName).toBe("Ghost in a Jar");
    });
  });

  it("Testa Botão de limpar pesquisa", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const searchNameInput = screen.getByPlaceholderText(
        "Insira o nome aqui"
      );
      fireEvent.change(searchNameInput, { target: { value: "oooo" } });
      const searchSpeciesInput = screen.getByPlaceholderText(
        "Insira a especie aqui"
      );
      fireEvent.change(searchSpeciesInput, { target: { value: "oooo" } });
      const button = screen.getByText("Limpar");
      fireEvent.click(button);

      expect(searchNameInput.value).toBe("");
      expect(searchSpeciesInput.value).toBe("");
    });
  });

  it("Testa confluencia de filtros", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const select = screen.getAllByRole("select")[0];
      fireEvent.change(select, { target: { value: "dead" } });
      const charName = screen.getAllByRole("status")[0];
      expect(charName).toBe("Dead");
    });
  });
});

describe("Listagem de personagens", () => {
  //  beforeAll(mockFetch);
  //beforeEach(cleanup);

  it("Testa se 20 cards são renderizados e se é exibido o nome do personagem", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      await render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const charNames = screen.getAllByRole("name");
      expect(charNames).toHaveLength(20);
    });
  });
});

describe("Testes de roteamento",()=> {
  //  beforeAll(mockFetch);
  //beforeEach(cleanup);

  it("testa Link da tela de listagem de favoritos", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      await render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const linkFavs = screen.getByText("Ver favoritos");
      fireEvent.click(linkFavs)
      const Title = screen.getByText("Personagens Favoritados");
      expect(Title).toBeInTheDocument();
    });
  });

  it("testa Link da tela dec detalhes de personagem", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      await render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    waitFor(() => {
      const link = screen.getAllByText("Ver detalhes")[1];
      fireEvent.click(link)
      const Title = screen.getByText("Morty Smith");
      expect(Title).toBeInTheDocument();
    });
  });
});

describe("Testes de favoritar",()=> {
  //  beforeAll(mockFetch);
  //beforeEach(cleanup);

  it("testa a adição de um novo favorito na listagem", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      await render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    localStorage.setItem("favs",JSON.stringify([]))
    waitFor(() => {
      const linkFavs = screen.getAllByRole("fav-btn")[0];
      fireEvent.click(linkFavs)
      const favs = JSON.parse(localStorage.getItem("favs"));
      expect(favs.length).toEqual(1);
      expect(favs[0]).toEqual(1);
    });
  });
  it("testa a adição de um novo favorito na tela de detalhes", async () => {
    const queryClient = new QueryClient();
    await act(async () => {
      await render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <main>
              <Home />
            </main>
          </Provider>
        </QueryClientProvider>
      );
    });
    localStorage.setItem("favs",JSON.stringify([]))
    waitFor(() => {
      const linkFavs = screen.getByText("Ver favoritos");
      fireEvent.click(linkFavs)

      const btnFavs = screen.getAllByRole("fav-det")[0];
      fireEvent.click(btnFavs)
      const favs = JSON.parse(localStorage.getItem("favs"));
      expect(favs.length).toEqual(1);
      expect(favs[0]).toEqual(1);
    });
  });
});
