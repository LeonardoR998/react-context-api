import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostsProvider } from "../src/context/PostContext";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<PostsPage />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
