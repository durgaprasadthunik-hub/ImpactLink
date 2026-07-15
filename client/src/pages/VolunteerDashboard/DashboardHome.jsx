import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../../components/EventCard/EventCard";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { useAuth } from "../../context/AuthContext";
import ApplicationCard from "../../components/ApplicationCard/ApplicationCard";
import CertificateCard from "../../components/CertificateCard/CertificateCard";
import { FaCalendarAlt, FaFileAlt, FaCertificate, FaClock } from "react-icons/fa";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import LeaderboardPreview from "../../components/LeaderboardPreview/LeaderboardPreview";
import Analytics from "../../components/Analytics/Analytics";

function VolunteerDashboard() {
  const { user } = useAuth();

  const [events, setEvents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchApplications();
    fetchCertificates();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get("/events");
      setEvents(response.data.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  const fetchApplications = async () => {
  try {
    const response = await api.get("/applications/my");
    setApplications(response.data.applications);
  } catch (error) {
    console.error(error);
  }
};
const fetchCertificates = async () => {
  try {
    const response = await api.get("/certificates/my");

    setCertificates(response.data.certificates);

  } catch (error) {
    console.error(error);
  }
};
const [analytics, setAnalytics] = useState({
  totalApplications: 0,
  totalAttendance: 0,
  totalCertificates: 0,
  totalHours: 0,
});
useEffect(() => {
  fetchAnalytics();
}, []);

const fetchAnalytics = async () => {
  try {

    const response = await api.get("/dashboard/volunteer");

    setAnalytics(response.data.analytics);

  } catch (error) {
    console.log(error);
  }
};

  return (
      <>
          {/* Welcome Card */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-4xl font-bold">
              Welcome,
              <span className="text-blue-700">
                {" "}
                {user?.fullName || "Volunteer"}!
              </span>
            </h1>

            <p className="text-gray-500 mt-3">
              Thank you for volunteering with ImpactLink.
            </p>

            <div className="mt-5 space-y-2">
              <p>
                <span className="font-semibold">Role:</span> {user?.role}
              </p>

              <p>
                <span className="font-semibold">Location:</span>{" "}
                {user?.location}
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <DashboardCard
        title="Available Events"
        value={events.length}
        icon={<FaCalendarAlt />}
        color="bg-blue-600"
      />

      <DashboardCard
        title="My Applications"
        value={analytics.totalApplications}
        icon={<FaFileAlt />}
        color="bg-green-600"
      />

      <DashboardCard
        title="Certificates"
        value={analytics.totalCertificates}
        icon={<FaCertificate />}
        color="bg-purple-600"
      />

      <DashboardCard
        title="Service Hours"
        value={analytics.totalHours}
        icon={<FaClock />}
        color="bg-orange-500"
      />
          </div>

          {/* Available Events */}
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-8">
              Available Events
            </h2>

            {events.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                No Events Available
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {events.map((event) => (
                  <EventCard
                    key={event._id}
                    event={event}
                  />
                ))}
              </div>
            )}
          </div>
             <div className="grid lg:grid-cols-2 gap-8 mt-10">
                  <RecentActivity />
                  <LeaderboardPreview />
              </div>
              <div className="mt-10">
                  <Analytics />
              </div>

          {/* My Applications */}
          <div className="mt-12">

            <h2 className="text-4xl font-bold mb-8">
              My Applications
            </h2>

            {applications.length === 0 ? (

              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                No Applications Yet
              </div>

            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {applications.map((application) => (
                  <ApplicationCard
                    key={application._id}
                    application={application}
                  />
                ))}

              </div>

            )}

          </div>

            
            <div className="mt-12">

          <h2 className="text-4xl font-bold mb-8">
            My Certificates
          </h2>

          {certificates.length === 0 ? (

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              No Certificates Yet
            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {certificates.map((certificate) => (

                <CertificateCard
                  key={certificate._id}
                  certificate={certificate}
                />

              ))}

            </div>

          )}

        </div>
      
      </>

  );
}

export default VolunteerDashboard;