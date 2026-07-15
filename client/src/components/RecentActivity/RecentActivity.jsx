import {
  FaCheckCircle,
  FaCalendarCheck,
  FaCertificate,
} from "react-icons/fa";

function RecentActivity() {
  const activities = [
    {
      icon: <FaCheckCircle className="text-green-600 text-xl" />,
      text: "Applied for Blood Donation Camp",
    },
    {
      icon: <FaCalendarCheck className="text-blue-600 text-xl" />,
      text: "Attendance marked for Tree Plantation Drive",
    },
    {
      icon: <FaCertificate className="text-yellow-500 text-xl" />,
      text: "Certificate generated for Beach Cleanup",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        🕒 Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-4 last:border-none"
          >
            {activity.icon}

            <p className="text-gray-700">
              {activity.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;