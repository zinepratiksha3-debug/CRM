import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import DiscoverPage from "../pages/DiscoverPage";
import HomePage from "../pages/HomePage";
import ProblemSearchPage from "../pages/ProblemSearchPage";
import ProblemsPage from "../pages/ProblemsPage";
import DocumentsPage from "../pages/DocumentsPage";
import SchemesPage from "../pages/SchemesPage";
import RightsPage from "../pages/RightsPage";
import HelpPage from "../pages/HelpPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Main */}
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Farmer Legal Help */}
        <Route
          path="/problem-search"
          element={<ProblemSearchPage />}
        />

        <Route
          path="/problems"
          element={<ProblemsPage />}
        />

        <Route
          path="/documents"
          element={<DocumentsPage />}
        />

        <Route
          path="/schemes"
          element={<SchemesPage />}
        />

        <Route
          path="/rights"
          element={<RightsPage />}
        />

        <Route
          path="/help"
          element={<HelpPage />}
        />

        {/* User */}
        <Route
          path="/profile"
          element={<ProfilePage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

        {/* Authentication */}
        <Route
          path="/signin"
          element={<SignInPage />}
        />

        <Route
          path="/signup"
          element={<SignUpPage />}
        />

      </Route>
    </Routes>
  );
};

export default AppRoutes;