import React, { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("☀️ पुणे: 32°C, उन्हाळा, वारा हलका");

  return (
    <div className="p-4 h-screen bg-green-50">
      <h1 className="text-xl font-bold text-green-700 mb-4">🌝 हवामान</h1>
      <div className="p-4 rounded-xl bg-white shadow">
        <p className="text-lg">{weather}</p>
        <p className="text-sm text-gray-500 mt-2">
          (ही माहिती सध्या डेमो आहे. पुढे API जोडू.)
        </p>
      </div>
    </div>
  );
}

export default Weather;
