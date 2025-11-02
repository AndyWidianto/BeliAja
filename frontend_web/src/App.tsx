import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage/loginPage";
import RegisterPage from "./Pages/RegisterPage/registerPage";
import DashboardPage from "./Pages/DashboardPage/dashboardPage";
import Dashboard from "./Pages/DashboardPage/Sections/Dashboard/dashboard";
import Users from "./Pages/DashboardPage/Sections/Users/Users";
import PaymentMethods from "./Pages/DashboardPage/Sections/PaymentMethod/paymentMethods";
import Categories from "./Pages/DashboardPage/Sections/Categories/categories";
import Percobaan from "./percobaan";
import Products from "./Pages/DashboardPage/Sections/Products/products";
import VariantProducts from "./Pages/DashboardPage/Sections/VariantProducts/variantProducts";
import Authorization from "./authorization";

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Authorization><DashboardPage /></Authorization>}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="payment-methods" element={<PaymentMethods />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="variant-products" element={<VariantProducts />} />
      </Route>
      <Route path="/percobaan" element={<Percobaan />} />
    </Routes>
    </>
  )
}

export default App
