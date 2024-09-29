import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Play from "./components/Play";
import Profile from "./components/Profile";
import Login from "./Auth/components/Login";
import Register from "./Auth/components/Register";
import ForgotPassword from "./Auth/components/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "", 
        element: <Home/>
      },
      { 
        path: "play", 
        element: <Play/>
      },
      { 
        path: "profile", 
        element: <Profile/>
      },
      { 
        path: "login", 
        element: <Login/>
      },
      { 
        path: "register", 
        element: <Register/>
      },
      { 
        path: "reset-password", 
        element: <ForgotPassword/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
