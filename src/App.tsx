import DashboardIcon from '@mui/icons-material/Dashboard';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SidebarLayout, { NavigationItem } from './layout/SidebarLayout';
import DatasetDetailPage from './pages/DatasetDetailPage';
import DatasetListPage from './pages/DatasetListPage';
import IndexPage from './pages/IndexPage';

const App = () => {
  const navigationItems: NavigationItem[] = [
    {
      icon: (<DashboardIcon />) as React.ReactNode,
      label: 'Dashboards',
      path: '/dashboards',
    },
    {
      icon: (<LeaderboardRoundedIcon />) as React.ReactNode,
      label: 'Visualizations',
      path: '/visualizations',
    },
    {
      icon: (<SaveRoundedIcon />) as React.ReactNode,
      label: 'Datasets',
      path: '/datasets',
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <SidebarLayout
          appTitle="Dashboard Generator"
          navigationItems={navigationItems}
        >
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/dashboards" element={<IndexPage />} />
            <Route path="/dashboards/:id" element={<IndexPage />} />
            <Route path="/visualizations" element={<IndexPage />} />
            <Route path="/visualizations/:id" element={<IndexPage />} />
            <Route path="/datasets" element={<DatasetListPage />} />
            <Route path="/datasets/:id" element={<DatasetDetailPage />} />
          </Routes>
        </SidebarLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
