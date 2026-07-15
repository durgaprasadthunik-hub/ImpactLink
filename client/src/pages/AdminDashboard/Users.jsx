import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaSearch, FaUsers } from "react-icons/fa";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await api.get("/admin/users");

      setUsers(res.data.users || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter((u) => {
    const name = u.fullName?.toLowerCase() || "";
    const email = u.email?.toLowerCase() || "";
    const searchText = search.toLowerCase();

    return (
      name.includes(searchText) ||
      email.includes(searchText)
    );
  });

  return (
    <div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Users Management
          </h1>

          <p className="text-gray-500 mt-2">
            Total Users : {users.length}
          </p>
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-xl shadow">
          <FaUsers size={28} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-5 mb-8 flex items-center gap-3">

        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search users..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
              <th className="text-left">Location</th>
            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>
                <td
                  colSpan="4"
                  className="text-center p-8"
                >
                  Loading users...
                </td>
              </tr>

            ) : filteredUsers.length === 0 ? (

              <tr>
                <td
                  colSpan="4"
                  className="text-center p-8 text-gray-500"
                >
                  No users found.
                </td>
              </tr>

            ) : (

              filteredUsers.map((user) => (

                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {user.fullName}
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        user.role === "admin"
                          ? "bg-red-600"
                          : user.role === "ngo"
                          ? "bg-green-600"
                          : "bg-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>{user.location || "-"}</td>
                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Users;