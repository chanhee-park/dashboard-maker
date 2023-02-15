import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DatasetDetailPage from './pages/DatasetDetailPage';
import DatasetListPage from './pages/DatasetListPage';

const App = () => {
  return (
    <div className="App">
      <h1>Dashboard Maker</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/datasets" element={<DatasetListPage />} />
          <Route path="/datasets/:datasetId" element={<DatasetDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
