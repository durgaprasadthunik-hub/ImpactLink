import { useEffect, useState } from "react";
import api from "../../services/api";

function LeaderboardPreview() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await api.get("/leaderboard");

      setLeaders(response.data.volunteers.slice(0, 3));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🏆 Top Volunteers
      </h2>

      {leaders.map((leader, index) => (

        <div
          key={leader._id}
          className="flex justify-between items-center border-b py-4"
        >

          <div>

            <p className="font-bold text-lg">

              {index === 0 && "🥇 "}
              {index === 1 && "🥈 "}
              {index === 2 && "🥉 "}

              {leader.fullName}

            </p>

            <p className="text-gray-500">
              {leader.location}
            </p>

          </div>

          <div className="text-blue-700 font-bold text-xl">
            {leader.totalHours} hrs
          </div>

        </div>

      ))}

    </div>
  );
}

export default LeaderboardPreview;