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
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProudctDetails from "./Pages/ProudctDetails";
import WishList from "./Pages/WishList";
import ChatBot from "./Pages/ChatBot";
import PersonalInfo from "./Pages/PersonalInfo";
import Reset from "./Pages/Reset";
import StoreFront from "./Pages/StoreFront";
import ViewBrand from "./Pages/ViewBrand";
import Subscriptions from "./Pages/Subscriptions";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SignUpFormC />} />
        <Route path="/SignUpM" element={<SignUpFormM />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUpFormC" element={<SignUpFormC />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/Chat" element={<ChatBot />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/storeFront" element={<StoreFront />} />
        <Route path="/view" element={<ViewBrand />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/proudDetails" element={<ProudctDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
