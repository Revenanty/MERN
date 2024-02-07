import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <>
      <div className="font-opensans">
        <Routes>
          <Route path="/" index element={<Homepage></Homepage>}></Route>
          <Route
            path="/blog/:id"
            element={<ArticleDetail></ArticleDetail>}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
