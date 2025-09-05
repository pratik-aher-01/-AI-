import React from "react";

function Market() {
  const prices = [
    { crop: "कापूस", price: "₹6500 / क्विंटल" },
    { crop: "सोयाबीन", price: "₹4200 / क्विंटल" },
    { crop: "कांदा", price: "₹1600 / क्विंटल" },
  ];

  return (
    <div className="p-4 h-screen bg-green-50">
      <h1 className="text-xl font-bold text-green-700 mb-4">💰 बाजार भाव</h1>
      <div className="grid gap-3">
        {prices.map((item, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow flex justify-between">
            <span>{item.crop}</span>
            <span className="font-semibold text-green-700">{item.price}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-3">(ही माहिती डेमो आहे.)</p>
    </div>
  );
}

export default Market;
