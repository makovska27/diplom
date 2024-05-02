import "./App.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import HomePage from "./pages/Home"
import Page404 from "./pages/404"
import AnimalType from "./pages/AnimalType"
import Navbar from "./components/Navbar"

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="pt-20 outlet">
          <Outlet />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "animal/:id",
          element: <AnimalType />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
