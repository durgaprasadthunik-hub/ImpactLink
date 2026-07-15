import { useEffect, useState } from "react";
import api from "../../services/api";

function Leaderboard() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await api.get("/leaderboard");
      setVolunteers(response.data.volunteers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        🏆 Volunteer Leaderboard
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="py-4">Rank</th>
              <th>Name</th>
              <th>Location</th>
              <th>Volunteer Hours</th>
            </tr>

          </thead>

          <tbody>

            {volunteers.map((volunteer, index) => (

              <tr
                key={volunteer._id}
                className="text-center border-b hover:bg-gray-100"
              >

                <td className="py-4 text-xl">

                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : index + 1}

                </td>

                <td>{volunteer.fullName}</td>

                <td>{volunteer.location}</td>

                <td className="font-bold text-blue-700">
                  {volunteer.totalHours}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Leaderboard;