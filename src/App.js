import "./assets/css/style.css";
import HomePage from "./assets/pages/HomePage";
import Header from "./components/Header";
import PostDetailPage from "./assets/pages/PostDetailPage";
import CategoriesPage from "./assets/pages/CategoriesPage";
import PostsByCategoryPage from "./assets/pages/PostsByCategoryPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
   <>
     <Header />
     <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/posts/:id" element={<PostsByCategoryPage />} />
      </Routes>
     </main>
   </>
  );
}

export default App;