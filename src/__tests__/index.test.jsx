import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { Provider } from "react-redux";
import { store } from "../state/store/store";
import { QueryClientProvider, QueryClient } from "react-query";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Testa Existencia do botão", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Home />
        </Provider>
      </QueryClientProvider>
    );
    const button = screen.getByText("Novo Produto");
    expect(button).toBeInTheDocument();
    expect(button.type).toBe("button");
  });
});
