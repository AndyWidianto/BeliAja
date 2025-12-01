import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage/loginPage";
import RegisterPage from "./Pages/RegisterPage/registerPage";
import Dashboard from "./Pages/Dashboard/DashboardPage/dashboard";
import Users from "./Pages/Dashboard/UsersPage/Users";
import PaymentMethods from "./Pages/Dashboard/PaymentMethodPage/paymentMethods";
import Categories from "./Pages/Dashboard/CategoriesPage/categories";
import Percobaan from "./percobaan";
import Products from "./Pages/Dashboard/ProductsPage/products";
import VariantProducts from "./Pages/Dashboard/VariantProductsPage/variantProducts";
import Authorization from "./authorization";
import LandingPage from "./Pages/LandingPage/landingPage";
import HomePage from "./Pages/Home/HomePage/homePage";
import DashboardLayout from "./Pages/Layouts/DashboardLayout/dashboardLayout";
import HomeLayout from "./Pages/Layouts/HomeLayout/homeLayout";
import DetailProductPage from "./Pages/Home/DetailProductPage/detailProductPage";
import PaymentPage from "./Pages/Home/PaymentPage/paymentPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Authorization><DashboardLayout /></Authorization>}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="payment-methods" element={<PaymentMethods />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="variant-products" element={<VariantProducts />} />
      </Route>
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<DetailProductPage />} />
      </Route>
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/percobaan" element={<Percobaan />} />
    </Routes>
    </>
  )
}

export default App
