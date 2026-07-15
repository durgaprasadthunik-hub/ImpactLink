import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaTrash, FaSearch } from "react-icons/fa";

function NGOs() {
  const [ngos, setNGOs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchNGOs();
  }, []);

  const fetchNGOs = async () => {
    try {
      const res = await api.get("/admin/ngos");
      setNGOs(res.data.ngos);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNGO = async (id) => {
    if (!window.confirm("Delete this NGO?")) return;

    await api.delete(`/admin/ngos/${id}`);
    fetchNGOs();
  };

  const filtered = ngos.filter(
    (ngo) =>
      ngo.fullName.toLowerCase().includes(search.toLowerCase()) ||
      ngo.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        NGOs Management
      </h1>

      <div className="bg-white rounded-xl shadow p-5 mb-8 flex items-center gap-3">

        <FaSearch className="text-gray-500" />

        <input
          className="w-full outline-none"
          placeholder="Search NGO..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-600 text-white">

            <tr>

              <th className="p-4 text-left">NGO</th>
              <th>Email</th>
              <th>Location</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((ngo) => (

              <tr
                key={ngo._id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">{ngo.fullName}</td>

                <td>{ngo.email}</td>

                <td>{ngo.location}</td>

                <td>

                  <button
                    onClick={() => deleteNGO(ngo._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default NGOs;