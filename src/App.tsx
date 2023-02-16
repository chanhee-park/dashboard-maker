import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DatasetDetailPage from './pages/DatasetDetailPage';
import DatasetListPage from './pages/DatasetListPage';
import IndexPage from './pages/IndexPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/datasets" element={<DatasetListPage />} />
          <Route path="/datasets/:datasetId" element={<DatasetDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
