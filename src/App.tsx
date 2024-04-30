import "./App.css"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import HomePage from "./pages/Home"
import Page404 from "./pages/404"
import AnimalType from "./pages/AnimalType"

const router = createBrowserRouter([
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
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
