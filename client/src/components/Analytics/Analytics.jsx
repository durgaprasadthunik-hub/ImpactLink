import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {

  const data = [
    {
      month: "Jan",
      hours: 12,
    },
    {
      month: "Feb",
      hours: 25,
    },
    {
      month: "Mar",
      hours: 35,
    },
    {
      month: "Apr",
      hours: 48,
    },
    {
      month: "May",
      hours: 60,
    },
  ];

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📊 Volunteer Hours Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="hours"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default Analytics;