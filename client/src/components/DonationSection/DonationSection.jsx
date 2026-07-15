import { useState } from "react";
import { Link } from "react-router-dom";

function DonationSection({ programme }) {
  const [amount, setAmount] = useState("");

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h2 className="text-5xl font-bold text-center text-blue-700">
          Donate for {programme.title}
        </h2>

        <p className="text-center text-gray-600 mt-5">
          Your contribution helps transform lives through{" "}
          <span className="font-semibold">{programme.title}</span>.
        </p>

        {/* Amount Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          {[500,1000,2500,5000].map((value)=>(
            <button
              key={value}
              onClick={()=>setAmount(value)}
              className={`px-8 py-3 rounded-xl border transition ${
                amount===value
                  ? "bg-blue-700 text-white"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              ₹ {value}
            </button>
          ))}

        </div>

        {/* Custom Amount */}

        <div className="mt-8 flex justify-center">

          <input
            type="number"
            placeholder="Enter Custom Amount"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            className="w-96 border rounded-xl px-5 py-4 text-center"
          />

        </div>

        {/* Donate Button */}

        <div className="text-center mt-10">

          <Link
            to={`/donate/${programme.slug}`}
            state={{ amount }}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold"
          >
            Donate Now →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default DonationSection;