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
import "./CSS/SignIn.css";
import SignUpFormC from "./Pages/SignUpC";
import SignUpFormM from "./Pages/SignUpM";
import { SignIn } from "./Pages/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/SignUpFormC" element={<SignUpFormC />} />
      <Route path="/SignUpM" element={<SignUpFormM />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
