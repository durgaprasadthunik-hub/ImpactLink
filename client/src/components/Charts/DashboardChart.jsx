import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function DashboardChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Event Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563eb"
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default DashboardChart;