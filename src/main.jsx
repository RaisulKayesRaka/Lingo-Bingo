import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import StartLearning from "./pages/StartLearning.jsx";
import Home from "./pages/Home.jsx";
import Tutorials from "./pages/Tutorials.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Lesson from "./pages/Lesson.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/start-learning",
        element: <StartLearning />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/lesson/:lesson_no",
        element: <Lesson />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
