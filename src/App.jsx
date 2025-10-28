import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { MoviesProvider } from "./contexts/MoviesContext";

function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  );
}

export default App;
