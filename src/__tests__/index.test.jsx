import { fireEvent, render, screen, cleanup, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../pages/index";
import { Provider } from "react-redux";
import { store } from "../state/store/store";
import { QueryClientProvider, QueryClient } from "react-query";
import "@testing-library/jest-dom";
import testData from "../../testData";
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

  it("Testa Existencia do campo de pesquisa por nome", async () => {
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
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.type).toBe("text");
    })
  });

  it("Testa Existencia do campo de pesquisa por especie", async () => {
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
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.type).toBe("text");
    })
  });
});

describe("Cards", () => {
  //  beforeAll(mockFetch);
  //beforeEach(cleanup);

  it("Testa Existencia do campo de pesquisa por nome", async () => {
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
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.type).toBe("text");
    })
  });

  it("Testa Existencia do campo de pesquisa por especie", async () => {
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
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.type).toBe("text");
    })
  });
});
