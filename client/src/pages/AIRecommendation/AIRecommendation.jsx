import { useEffect, useState } from "react";
import api from "../../services/api";

function AIRecommendation() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await api.get("/recommendations");
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        🤖 AI Recommended Events
      </h1>

      {recommendations.length === 0 ? (

        <div className="bg-white rounded-xl shadow-md p-8">
          No Recommendations Found
        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {recommendations.map((event) => (

            <div
              key={event._id}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold text-blue-700">
                {event.title}
              </h2>

              <p className="mt-2">
                {event.description}
              </p>

              <p className="mt-4">
                📍 {event.location}
              </p>

              <p>
                📅 {new Date(event.date).toLocaleDateString()}
              </p>

              <div className="mt-5">

                <div className="flex justify-between mb-2">
                  <span>Match Score</span>
                  <span>{event.matchScore}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{
                      width: `${event.matchScore}%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AIRecommendation;