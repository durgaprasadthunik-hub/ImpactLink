import React from "react";

function DashboardCard({
  title,
  value,
  icon,
  color = "bg-blue-600",
}) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 text-white ${color}
      hover:scale-105 transition duration-300`}
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-lg">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;