// React Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Css
import './App.css'

// Custom Component
import MainLayout from './components/layouts/MainLayout';
import ProtectedRoutes from './routes/ProtectedRoutes';
import AccessDenied from './pages/AccessDenied';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import RoleUSer from './pages/RoleUser/RoleUser';
import Category from './pages/Category/Category';
import SignUp from './pages/Login/SignUp';
import AddRoleUser from './pages/RoleUser/AddRoleUser';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

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

          <Route path='/profile' element={<UserProfile />} />
          <Route path='/category' element={<Category />} />
          <Route path='/role-user' element={<RoleUSer />} />
          <Route path='/add-role' element={<AddRoleUser />} />


          {/* AccessDenied */}
          <Route path="*" element={<AccessDenied />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
