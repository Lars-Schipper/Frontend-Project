import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/HomePage.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Investments from './pages/InvestmentPage.jsx'
import Layout from './pages/Layout.jsx'
import ResearchPage from './pages/ResearchPage.jsx'
import DashboardPage from './pages/DashboardPade.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'


const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "/investment", element: <Investments /> },
      { path: "/research", element: <ResearchPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
    ]
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
