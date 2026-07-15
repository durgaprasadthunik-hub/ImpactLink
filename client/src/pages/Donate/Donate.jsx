import { useParams, useLocation } from "react-router-dom";

function Donate() {
  const { programme } = useParams();
  const location = useLocation();

  const amount = location.state?.amount || "";

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-xl shadow-xl w-[700px]">

        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Donate for {programme.toUpperCase()}
        </h1>

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Full Name"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Email"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Mobile Number"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Amount"
          value={amount}
          readOnly
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Proceed to Pay
        </button>

      </div>

    </div>
  );
}

export default Donate;