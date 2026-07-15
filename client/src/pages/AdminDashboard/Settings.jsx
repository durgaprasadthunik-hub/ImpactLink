import { useState } from "react";
import { FaSave } from "react-icons/fa";

function Settings() {
  const [settings, setSettings] = useState({
    platformName: "ImpactLink",
    supportEmail: "support@impactlink.com",
    maxVolunteers: 100,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Platform Settings
      </h1>

      <div className="bg-white rounded-xl shadow p-8 space-y-6">

        <div>
          <label className="block mb-2 font-semibold">
            Platform Name
          </label>

          <input
            type="text"
            name="platformName"
            value={settings.platformName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Support Email
          </label>

          <input
            type="email"
            name="supportEmail"
            value={settings.supportEmail}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Maximum Volunteers Per Event
          </label>

          <input
            type="number"
            name="maxVolunteers"
            value={settings.maxVolunteers}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="maintenanceMode"
            checked={settings.maintenanceMode}
            onChange={handleChange}
          />

          <label className="font-semibold">
            Enable Maintenance Mode
          </label>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaSave />
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;