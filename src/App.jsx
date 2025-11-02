import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { MoviesProvider } from "./contexts/MoviesContext";
import MovieDetailPage from "./pages/MovieDetailPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="movies/:id" element={<MovieDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  );
}

export default App;
