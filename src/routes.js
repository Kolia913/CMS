import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/students',
    element: <Students />
  },
  {
    path: '/tasks',
    element: <div 
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
              <h1>This page is relaxing, please do not disturb it 🥃🚬</h1>
            </div>
  }
])