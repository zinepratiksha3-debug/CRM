import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../Pages/Home";

import SignUp from "../Pages/auth/SignUp";
import SignIn from "../Pages/auth/SignIn";
import ForgotPassword from "../Pages/auth/ForgotPassword";
import ResetPassword from "../Pages/auth/ResetPassword";

import Dashboard from "../Pages/dashboard/Dashboard";

import Profile from "../Pages/profile/Profile";
import EditProfile from "../Pages/profile/EditProfile";
import ChangePassword from "../Pages/profile/ChangePassword";

import AddEnquiry from "../Pages/enquiry/AddEnquiry";
import EnquiryList from "../Pages/enquiry/EnquiryList";
import EnquiryDetails from "../Pages/enquiry/EnquiryDetails";
import EditEnquiry from "../Pages/enquiry/EditEnquiry";

import AdminDashboard from "../Pages/admin/AdminDashboard";
import UserList from "../Pages/admin/UserList";
import AddUser from "../Pages/admin/AddUser";
import EditUser from "../Pages/admin/EditUser";
import UserDetails from "../Pages/admin/UserDetails";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";
import { User } from "lucide-react";
import Users from "../Pages/admin/UserList";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= MAIN LAYOUT ================= */}
        <Route element={<MainLayout />}>

          {/* Home - Public + Logged In */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ================= PUBLIC PAGES ================= */}

          <Route
            path="/signup"
            element={<SignUp />}
          />

          <Route
            path="/signin"
            element={<SignIn />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />
          <Route
  path="/admin/users"
  element={<Users />}
/>

          {/* ================= PROTECTED USER PAGES ================= */}

          <Route element={<ProtectedRoute />}>

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Profile */}
            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/addenq"
              element={<AddEnquiry/>}
            />

            {/* Edit Profile */}
            <Route
              path="/profile/edit"
              element={<EditProfile />}
            />

            {/* Change Password */}
            <Route
              path="/change-password"
              element={<ChangePassword />}
            />

            {/* Enquiries */}
            <Route
              path="/enquiries"
              element={<EnquiryList />}
            />

            {/* Add Enquiry */}
            <Route
              path="/enquiries/add"
              element={<AddEnquiry />}
            />

            {/* Edit Enquiry */}
            <Route
              path="/enquiries/:id/edit"
              element={<EditEnquiry />}
            />
              {/* <Route
              path="/profile"
              element={<ProfilePage/>}
            /> */}
            

            {/* Enquiry Details */}
            <Route
              path="/enquiries/:id"
              element={<EnquiryDetails />}
            />

          </Route>
        </Route>

        {/* ================= ADMIN PAGES ================= */}

        <Route element={<AdminRoute />}>

          <Route element={<DashboardLayout />}>

            {/* Admin Dashboard */}
            <Route
              path="/admin"
              element={<AdminDashboard />}
            />
            <Route
              path="/userlist"
              element={<User/>}
            />
            {/* User List */}
            <Route
              path="/admin/users"
              element={<UserList />}
            />

            {/* Add User */}
            <Route
              path="/admin/users/add"
              element={<AddUser />}
            />

            {/* Edit User */}
            <Route
              path="/admin/users/:id/edit"
              element={<EditUser />}
            />

            {/* User Details */}
            <Route
              path="/admin/users/:id"
              element={<UserDetails />}
            />

          </Route>
        </Route>

        {/* ================= USERS ================= */}

        <Route element={<ProtectedRoute />}>
          {/* <Route
            path="/users"
            element={<UserList />}
          /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;