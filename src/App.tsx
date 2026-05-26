import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/Layout/DashboardLayout';
import { UserList } from './pages/UserList/UserList';
import { UserDetail } from './pages/UserDetail/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          {/* Other routes omitted for this assignment */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
