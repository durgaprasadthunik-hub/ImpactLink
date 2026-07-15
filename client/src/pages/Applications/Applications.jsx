import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaSearch } from "react-icons/fa";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await api.get("/admin/applications");
      setApplications(res.data.applications);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredApplications = applications.filter((app) =>
    app.volunteer?.fullName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Applications Management
      </h1>

      <div className="bg-white rounded-xl shadow p-5 mb-8 flex items-center gap-3">
        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search volunteer..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Volunteer</th>
              <th>Email</th>
              <th>Event</th>
              <th>Status</th>
              <th>Applied On</th>
            </tr>

          </thead>

          <tbody>

            {filteredApplications.map((app) => (

              <tr
                key={app._id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">
                  {app.volunteer?.fullName}
                </td>

                <td>
                  {app.volunteer?.email}
                </td>

                <td>
                  {app.event?.title}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : app.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {app.status}
                  </span>

                </td>

                <td>
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Applications;