import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaSearch } from "react-icons/fa";

function NGOApplications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await api.get("/applications/ngo");
      setApplications(res.data.applications);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/applications/${id}/status`, {
        status,
      });

      fetchApplications();
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
        NGO Applications
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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredApplications.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-8 text-gray-500"
                >
                  No Applications Found
                </td>
              </tr>
            ) : (
              filteredApplications.map((app) => (
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

                  <td className="space-x-2">

                    {app.status === "Pending" ? (
                      <>
                        <button
                          onClick={() =>
                            updateStatus(app._id, "Approved")
                          }
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(app._id, "Rejected")
                          }
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500">
                        Completed
                      </span>
                    )}

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default NGOApplications;