import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "@/layouts/DashboardLayout"
import AuthLayout from "@/layouts/AuthLayout"
import StoreLayout from "@/layouts/StoreLayout"

// Auth
import LoginPage from "@/pages/auth/Login"
import SignupPage from "@/pages/auth/Signup"
import OnboardingWizard from "@/pages/auth/Onboarding"

// Dashboards
import AdminDashboard from "@/pages/dashboards/AdminDashboard"
import ManagerDashboard from "@/pages/dashboards/ManagerDashboard"
import PickerDashboard from "@/pages/dashboards/PickerDashboard"

// WMS
import WarehouseEditor from "@/pages/wms/WarehouseEditor"
import Inventory from "@/pages/wms/Inventory"
import ProductDetails from "@/pages/wms/ProductDetails"

// CRM
import CRMList from "@/pages/crm/CRMList"
import Pipeline from "@/pages/crm/Pipeline"
import CustomerDetails from "@/pages/crm/CustomerDetails"

// Store
import StoreHome from "@/pages/store/StoreHome"
import Catalog from "@/pages/store/Catalog"
import Cart from "@/pages/store/Cart"
import StoreAccount from "@/pages/store/StoreAccount"

// New Pages
import Shipping from "@/pages/shipping/Shipping"
import Reports from "@/pages/reports/Reports"
import Settings from "@/pages/settings/Settings"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<div className="p-8 text-center">Forgot Password Page</div>} />
        </Route>
        <Route path="/onboarding" element={<OnboardingWizard />} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/crm" element={<CRMList />} />
          <Route path="/crm/pipeline" element={<Pipeline />} />
          <Route path="/crm/:id" element={<CustomerDetails />} />

          <Route path="/orders" element={<ManagerDashboard />} />

          <Route path="/wms" element={<WarehouseEditor />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<ProductDetails />} />

          <Route path="/picking" element={<PickerDashboard />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Store Routes */}
        <Route path="/store" element={<StoreLayout />}>
          <Route index element={<StoreHome />} />
          <Route path="products" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="account" element={<StoreAccount />} />
          {/* Fallback for store */}
          <Route path="*" element={<Navigate to="/store" replace />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
