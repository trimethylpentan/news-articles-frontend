import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import ViewArticle from "./ViewArticle";
import NewsArticles from "./NewsArticles";
import CreateNewsArticle from "./CreateNewsArticle";

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App/>}/>
      <Route path={'news-articles'} element={<NewsArticles/>}>
        <Route path={':articleId'} element={<ViewArticle/>}/>
        <Route path={'create'} element={<CreateNewsArticle/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
}

export default Router;
