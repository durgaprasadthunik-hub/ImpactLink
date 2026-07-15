import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";

import DashboardCard from "../../components/DashboardCard/DashboardCard";
import api from "../../services/api";

function DashboardHome() {
  const navigate = useNavigate();
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVolunteers: 0,
    totalNGOs: 0,
    totalEvents: 0,
    totalApplications: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

 const fetchDashboard = async () => {
  try {
    const { data } = await api.get("/admin/dashboard");

    setStats(data);
    setRecentUsers(data.recentUsers);
    setRecentEvents(data.recentEvents);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      {/* Welcome */}

      <div className="bg-white rounded-xl shadow-md p-8">

        <h1 className="text-4xl font-bold">
          Welcome,
          <span className="text-red-600"> Admin</span>
        </h1>

        <p className="text-gray-500 mt-3">
          Manage volunteers, NGOs and the entire ImpactLink platform.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">

        <DashboardCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<FaUsers />}
          color="bg-red-600"
        />

        <DashboardCard
          title="Total NGOs"
          value={stats.totalNGOs}
          icon={<FaBuilding />}
          color="bg-green-600"
        />

        <DashboardCard
          title="Total Events"
          value={stats.totalEvents}
          icon={<FaCalendarAlt />}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Applications"
          value={stats.totalApplications}
          icon={<FaClipboardList />}
          color="bg-purple-600"
        />
        <DashboardCard
          title="Volunteers"
          value={stats.totalVolunteers}
          icon={<FaUsers />}
          color="bg-orange-500"
        />

      </div>

      {/* Quick Actions */}

      <div className="mt-10 bg-white rounded-xl shadow-md p-8">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-5">

          <button
            onClick={() => navigate("/admin/users")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            Manage Users
          </button>

          <button
            onClick={() => navigate("/admin/ngos")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Manage NGOs
          </button>

          <button
            onClick={() => navigate("/admin/events")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            View Events
          </button>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="mt-10 bg-white rounded-xl shadow-md p-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-3">

          {recentUsers.map((user) => (
            <p key={user._id}>
              ✅ {user.fullName} registered as {user.role}
            </p>
          ))}

          {recentEvents.map((event) => (
            <p key={event._id}>
              📅 Event created: {event.title}
            </p>
          ))}

        </div>

      </div>
    </>
  );
}

export default DashboardHome;