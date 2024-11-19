import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import StartLearning from "./pages/StartLearning.jsx";
import Home from "./pages/Home.jsx"
import Tutorials from "./pages/Tutorials.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/start-learning",
        element: <StartLearning/>
      },
      {
        path: "/tutorials",
        element: <Tutorials/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
