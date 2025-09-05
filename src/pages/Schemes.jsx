import React from "react";

function Schemes() {
  const schemes = [
    { name: "प्रधानमंत्री किसान योजना", desc: "शेतकऱ्यांना वार्षिक ₹6000 मदत." },
    { name: "फसल विमा योजना", desc: "पिकाचे नुकसान झाल्यास विमा रक्कम." },
    { name: "सिंचन योजना", desc: "सिंचनासाठी शासकीय अनुदान." },
  ];

  return (
    <div className="p-4 h-screen bg-green-50">
      <h1 className="text-xl font-bold text-green-700 mb-4">🏛️ शासकीय योजना</h1>
      <div className="flex flex-col gap-3">
        {schemes.map((scheme, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-green-800">{scheme.name}</h2>
            <p className="text-gray-600">{scheme.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schemes;
