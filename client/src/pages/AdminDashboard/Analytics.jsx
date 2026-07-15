import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import api from "../../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVolunteers: 0,
    totalNGOs: 0,
    totalEvents: 0,
    totalApplications: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { data } = await api.get("/admin/dashboard");
      setStats(data);
    } catch (err) {
      console.log(err);
    }
  };

  const barData = {
    labels: [
      "Users",
      "Volunteers",
      "NGOs",
      "Events",
      "Applications",
    ],
    datasets: [
      {
        label: "Platform Statistics",
        data: [
          stats.totalUsers,
          stats.totalVolunteers,
          stats.totalNGOs,
          stats.totalEvents,
          stats.totalApplications,
        ],
      },
    ],
  };

  const pieData = {
    labels: ["Volunteers", "NGOs"],
    datasets: [
      {
        data: [
          stats.totalVolunteers,
          stats.totalNGOs,
        ],
      },
    ],
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <Bar data={barData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <Pie data={pieData} />
        </div>

      </div>

    </div>
  );
}

export default Analytics;