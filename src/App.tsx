import {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import IndexPage from './pages/index';
// import ListPage from './pages/list';
// import DetailPage fro m './pages/detail';
import reportWebVitals from './reportWebVitals';


const IndexPage = lazy(() => import('./pages/index'));
const ListPage = lazy(() => import('./pages/list'));
const DetailPage = lazy(() => import('./pages/detail'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

reportWebVitals(console.log);