import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import AccessDenied from './pages/AccessDenied';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path='/' element={<MainLayout />}>
          <Route element={<ProtectedRoutes allowedRoles={['super_admin']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoutes allowedRoles={['bossmaker_member']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoutes allowedRoles={['course_participant']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          
          {/* AccessDenied */}
          <Route path="*" element={<AccessDenied />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
