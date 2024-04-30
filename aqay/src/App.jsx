import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUpForm from "./Pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<SignUpForm />} />)
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
