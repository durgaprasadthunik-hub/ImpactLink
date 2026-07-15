import DashboardCard from "../../components/DashboardCard/DashboardCard";
import CreateEvent from "../../components/CreateEvent/CreateEvent";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../../services/api";
import MyEvents from "../../components/MyEvents/MyEvents";
import RecentEvents from "../../components/RecentEvents/RecentEvents";
import PendingApplications from "../../components/PendingApplications/PendingApplications";
import DashboardChart from "../../components/Charts/DashboardChart";

function NGODashboard() {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState({
  totalEvents: 0,
  totalApplications: 0,
  totalAttendance: 0,
  totalCertificates: 0,
});

useEffect(() => {
  fetchAnalytics();
}, []);

const fetchAnalytics = async () => {
  try {
    const response = await api.get("/analytics");
    setAnalytics(response.data.analytics);
  } catch (error) {
    console.log(error);
  }
};

const chartData = [
  {
    name: "Events",
    value: analytics.totalEvents,
  },
  {
    name: "Applications",
    value: analytics.totalApplications,
  },
  {
    name: "Attendance",
    value: analytics.totalAttendance,
  },
  {
    name: "Certificates",
    value: analytics.totalCertificates,
  },
];

  return (
    <>

          {/* Welcome Card */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-4xl font-bold">
              Welcome,
              <span className="text-blue-700">
                {" "}
                {user?.fullName || "NGO"}
              </span>
            </h1>

            <p className="text-gray-500 mt-3">
              Manage your NGO events and volunteers with ImpactLink.
            </p>

            <div className="mt-5 space-y-2">
              <p>
                <span className="font-semibold">Role:</span> {user?.role}
              </p>

              <p>
                <span className="font-semibold">Location:</span> {user?.location}
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            <DashboardCard
              title="My Events"
              value={analytics.totalEvents}
            />

            <DashboardCard
              title="Applications"
              value={analytics.totalApplications}
            />

            <DashboardCard
              title="Attendance"
              value={analytics.totalAttendance}
            />

            <DashboardCard
              title="Certificates"
              value={analytics.totalCertificates}
            />

          </div>

          {/* Create Event Form */}
          <CreateEvent />
          {/* My Events List */}
          <MyEvents />
          <DashboardChart data={chartData} />
          <div className="mt-10">
            <RecentEvents />
        </div>
        <div className="mt-8">
            <PendingApplications />
        </div>

    </>
  );
}

export default NGODashboard;