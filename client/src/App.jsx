import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import VolunteerDashboard from "./pages/VolunteerDashboard/DashboardHome";
import NGODashboard from "./pages/NGODashboard/NGODashboard";

import Events from "./pages/Events/Events";
import Certificates from "./pages/Certificates/Certificates";
import AIRecommendation from "./pages/AIRecommendation/AIRecommendation";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

import Applications from "./pages/Applications/Applications";
import Attendance from "./pages/Attendance/Attendance";
import MyCertificates from "./pages/MyCertificates/MyCertificates";

import ProgrammeDetails from "./pages/ProgrammeDetails/ProgrammeDetails";
import Donate from "./pages/Donate/Donate";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import VolunteerLayout from "./layouts/VolunteerLayout";
import NGOLayout from "./layouts/NGOLayout";
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import DashboardHome from "./pages/AdminDashboard/DashboardHome";
import Users from "./pages/AdminDashboard/Users";
import NGOs from "./pages/AdminDashboard/NGOs";
import AdminEvents from "./pages/AdminDashboard/AdminEvents";
import Analytics from "./pages/AdminDashboard/Analytics";
import Settings from "./pages/AdminDashboard/Settings";

import EditEvent from "./pages/NGODashboard/EditEvent";

function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Volunteer */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["volunteer"]}>
            <VolunteerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/volunteer/events" element={<Events />} />
        <Route path="/volunteer/profile" element={<Profile />} />
        <Route path="/volunteer/leaderboard" element={<Leaderboard />} />
        <Route path="/volunteer/my-certificates" element={<MyCertificates />} />
        <Route path="/volunteer/ai" element={<AIRecommendation />} />
      </Route>

      {/* NGO */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["ngo"]}>
            <NGOLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/ngo" element={<NGODashboard />} />
        <Route path="/ngo/events" element={<Events />} />
        <Route path="/ngo/applications" element={<Applications />} />
        <Route path="/ngo/attendance" element={<Attendance />} />
        <Route path="/ngo/certificates" element={<Certificates />} />
        <Route path="/ngo/profile" element={<Profile />} />

            {/* NGO Edit Event */}
          <Route
          path="/edit-event/:id"
          element={<EditEvent />}
        />
      </Route>

      {/* Admin */}
      <Route
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminLayout />
    </ProtectedRoute>
  }
      >
        <Route path="/admin" element={<DashboardHome />} />

        <Route path="/admin/users" element={<Users />} />

        <Route path="/admin/ngos" element={<NGOs />} />

        <Route path="/admin/events" element={<AdminEvents />} />

        <Route path="/admin/applications" element={<Applications />} />

        <Route path="/admin/analytics" element={<Analytics />} />

        <Route path="/admin/settings" element={<Settings />} />

        <Route path="/admin/profile" element={<Profile />} />
      </Route>

      {/* Landing */}
      <Route path="/programmes/:category" element={<ProgrammeDetails />} />
      <Route path="/donate/:programme" element={<Donate />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;