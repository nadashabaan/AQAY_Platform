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
import ChatBot from "./Pages/ChatBot";
import PersonalInfo from "./Pages/PersonalInfo";
import StoreFront from "./Pages/StoreFront";
import ViewBrand from "./Pages/ViewBrand";
import Subscriptions from "./Pages/Subscriptions";
import DashboardM from "./Pages/DashboardM";
import DashboardA from "./Pages/DashboardA";
import BaseLayout from "./layoutD/BaseLayout";
import BaseLayoutA from "./layoutD/BaseLayoutA";
import SubscriptionRequests from "./Pages/SubscriptionRequests";
import ManageAccounts from "./Pages/ManageAccounts";
import BrandDetail from "./Pages/BrandDetail";
import PageNotFound from "./Pages/PageNotFound";
import Reports from "./Pages/Reports";
import Orders from "./Pages/Orders";
import AddProduct from "./Pages/AddProduct";
import AddProductVariations from "./Pages/AddProductVariations";
import RequestsRE from "./Pages/RequestsRE";
import ManageCategories from "./Pages/ManageCategories";
import EditProduct from "./Pages/EditProduct";
import MerchantProfile from "./Pages/MerchantProfile";
import SubscriptionPayment from "./Pages/SubscriptionPayment";
import WishlistProducts from "./Pages/WishlistProducts";
import OrderHistory from "./Pages/OrderHistory";
import Reset from "./Pages/Reset";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SignUpFormC />} />
        <Route path="/SignUpM" element={<SignUpFormM />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUpFormC" element={<SignUpFormC />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/BrandDetail" element={<BrandDetail />} />
        <Route path="/WishList" element={<WishlistProducts />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/Chat" element={<ChatBot />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/view" element={<ViewBrand />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/proudDetails" element={<ProudctDetails />} />

        <Route path="/subscriptionPayment" element={<SubscriptionPayment />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Reset" element={<Reset />} />
        <Route element={<BaseLayout />}>
          <Route path="/DashboardM" element={<DashboardM />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/storeFront" element={<StoreFront />} />
          <Route path="/addProuduct" element={<AddProduct />} />
          <Route path="/addProductvar" element={<AddProductVariations />} />
          <Route path="/Requests" element={<RequestsRE />} />
          <Route path="/editProduct" element={<EditProduct />} />
          <Route path="/merchantProfile" element={<MerchantProfile />} />
        </Route>
        <Route element={<BaseLayoutA />}>
          <Route path="/DashboardA" element={<DashboardA />} />
          <Route path="/SubReq" element={<SubscriptionRequests />} />
          <Route path="/ManageAcc" element={<ManageAccounts />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/manageCat" element={<ManageCategories />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
