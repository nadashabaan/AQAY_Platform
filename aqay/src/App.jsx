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
import "./CSS/SignUpC.css";
import "./CSS/SignUpM.css";
import SignUpFormC from "./Pages/SignUpC";
import SignUpFormM from "./Pages/SignUpM";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SignUpFormC />}>
      <Route path="/SignUpM" element={<SignUpFormM />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
