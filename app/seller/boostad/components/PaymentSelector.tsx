"use client";
import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react"; // icons

type PaymentMethod = "debit" | "bank";

const PaymentSelector = () => {
  const [selected, setSelected] = useState<PaymentMethod>("debit");

  const methods = [
    { id: "debit", label: "Debit Card" },
    { id: "bank", label: "Bank Transfer" },
  ];

  return (
    <div className="w-full  mx-auto bg-[#E8ECF8] p-6 rounded-xl">
      <h2 className="text-center text-xl font-bold text-primary mb-6">
        Select Payment Method
      </h2>

      <div className="flex flex-col gap-4">
        {methods.map((method) => {
          const isActive = selected === method.id;
          return (
            <button
              key={method.id}
              onClick={() => setSelected(method.id as PaymentMethod)}
              className={`flex justify-between items-center w-full rounded-lg border px-4 py-4 transition-colors
                ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-primary/40 text-gray-700"
                }`}
            >
              <span className="font-medium">{method.label}</span>
              {isActive ? (
                <CheckCircle2 className="text-primary" />
              ) : (
                <Circle className="text-gray-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentSelector;
