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
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Profile from "./pages/Profile.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

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
        path: "/startLearning",
        element: <StartLearning />,
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            {" "}
            <Tutorials />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/lesson/:lesson_no",
        element: (
          <PrivateRoute>
            {" "}
            <Lesson />{" "}
          </PrivateRoute>
        ),
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
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateProfile />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
