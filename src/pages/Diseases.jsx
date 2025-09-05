import React from "react";

function Diseases() {
  const diseases = [
    { crop: "कापूस", issue: "लाल कोळी - पाने सुकतात." },
    { crop: "सोयाबीन", issue: "अळी - पानं खातात." },
    { crop: "गहू", issue: "रोग - पाने पिवळी पडतात." },
  ];

  return (
    <div className="p-4 h-screen bg-green-50">
      <h1 className="text-xl font-bold text-green-700 mb-4">🌾 पिकांचे रोग</h1>
      <div className="flex flex-col gap-3">
        {diseases.map((d, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-green-800">{d.crop}</h2>
            <p className="text-gray-600">{d.issue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diseases;
