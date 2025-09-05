import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from './components/AboutPage.jsx';
import Header from './components/Header.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import CountryDetails from './components/CountryDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contact',
        element: <p>contact path</p>
      },
      {
        path: 'about',
        Component: AboutPage
      },
      {
        index: true,
        Component: Home
      },
      {
        path:'country',
        Component:CountryDetails
      }
    ]
  },


])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  // {/* </StrictMode>, */}
  <>

    <RouterProvider router={router} />
  </>
)
