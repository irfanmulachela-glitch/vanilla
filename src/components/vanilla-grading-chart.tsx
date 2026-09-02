"use client";

import { useState } from "react";

type Grade = "gourmet" | "a" | "b";

const grades = {
  gourmet: {
    name: "Gourmet",
    label: "GOURMET",
    range: "18 – 22 cm",
    description: "Premium long beans with maximum vanillin content. Perfect for retail display, pastry, and culinary applications.",
    color: "#2C2518",
    specs: {
      length: "18-22 cm",
      moisture: "25-35%",
      vanillin: "1.5-2.7%",
      appearance: "Plump, oily, visible vanillin crystals",
    },
  },
  a: {
    name: "Grade A",
    label: "GRADE A",
    range: "15 – 17 cm",
    description: "Standard gourmet quality beans for retail and food service. Consistent moisture and vanillin content.",
    color: "#4A3F2F",
    specs: {
      length: "15-17 cm",
      moisture: "25-35%",
      vanillin: "1.3-2.5%",
      appearance: "Black, oily, flexible, full pod",
    },
  },
  b: {
    name: "Grade B",
    label: "GRADE B",
    range: "10 – 14 cm",
    description: "Cost-effective option for extract manufacturing and industrial applications. Lower moisture enables efficient extraction.",
    color: "#6B5D4A",
    specs: {
      length: "10-14 cm",
      moisture: "< 25%",
      vanillin: "1.3-2.2%",
      appearance: "Dry, thinner, may have split ends",
    },
  },
};

export default function VanillaGradingChart() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>("gourmet");
  const grade = grades[selectedGrade];

  return (
    <div className="bg-[#F8F6F2] rounded-2xl p-8 lg:p-12 border border-[#E5E0D8]">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em] mb-3">
          Grading · Printed to Scale
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold text-[#2C2518]">
          The three grades, at actual size
        </h3>
      </div>

      {/* Visual Chart */}
      <div className="relative mb-12">
        {/* Scale ruler */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between py-4">
          {[0, 5, 10, 15, 20].map((cm) => (
            <div key={cm} className="flex items-center gap-2">
              <span className="text-xs text-[#B5A37A] font-medium w-6 text-right">
                {cm}
              </span>
              <div className="w-3 h-px bg-[#B5A37A]" />
            </div>
          ))}
        </div>

        {/* Beans container */}
        <div className="ml-16 flex items-end justify-center gap-8 lg:gap-16 h-[400px] relative">
          {/* Gourmet bean */}
          <div className="flex flex-col items-center">
            <div
              className="w-8 lg:w-10 rounded-t-full transition-all duration-500"
              style={{
                height: "320px",
                background: "linear-gradient(180deg, #1a1410 0%, #2C2518 50%, #1a1410 100%)",
                clipPath: "ellipse(50% 100% at 50% 0%)",
              }}
            />
            <div className="mt-2 text-center">
              <div className="w-16 h-px bg-[#B5A37A] mb-2" />
              <p className="text-xs font-medium text-[#2C2518]">22 cm</p>
            </div>
          </div>

          {/* Grade A bean */}
          <div className="flex flex-col items-center">
            <div
              className="w-8 lg:w-10 rounded-t-full transition-all duration-500"
              style={{
                height: "260px",
                background: "linear-gradient(180deg, #2a2218 0%, #4A3F2F 50%, #2a2218 100%)",
                clipPath: "ellipse(50% 100% at 50% 0%)",
              }}
            />
            <div className="mt-2 text-center">
              <div className="w-16 h-px bg-[#B5A37A] mb-2" />
              <p className="text-xs font-medium text-[#2C2518]">17 cm</p>
            </div>
          </div>

          {/* Grade B bean */}
          <div className="flex flex-col items-center">
            <div
              className="w-8 lg:w-10 rounded-t-full transition-all duration-500"
              style={{
                height: "180px",
                background: "linear-gradient(180deg, #3d3428 0%, #6B5D4A 50%, #3d3428 100%)",
                clipPath: "ellipse(50% 100% at 50% 0%)",
              }}
            />
            <div className="mt-2 text-center">
              <div className="w-16 h-px bg-[#B5A37A] mb-2" />
              <p className="text-xs font-medium text-[#2C2518]">10 cm</p>
            </div>
          </div>
        </div>

        {/* CM label */}
        <div className="absolute left-0 bottom-0 text-xs text-[#B5A37A] font-medium">
          CM
        </div>
      </div>

      {/* Grade Selector */}
      <div className="flex justify-center gap-4 lg:gap-8 mb-8">
        {(Object.keys(grades) as Grade[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedGrade(key)}
            className={`text-center transition-all ${
              selectedGrade === key
                ? "opacity-100"
                : "opacity-50 hover:opacity-75"
            }`}
          >
            <div
              className={`w-full h-1 rounded-full mb-3 ${
                selectedGrade === key ? "bg-[#B5A37A]" : "bg-[#E5E0D8]"
              }`}
            />
            <p className="text-sm font-bold text-[#2C2518] tracking-wider">
              {grades[key].label}
            </p>
            <p className="text-xs text-[#6B6358] mt-1">{grades[key].range}</p>
          </button>
        ))}
      </div>

      {/* Grade Details */}
      <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#E5E0D8]">
        <h4 className="text-lg font-bold text-[#2C2518] mb-2">
          {grade.name} Vanilla Beans
        </h4>
        <p className="text-[#6B6358] mb-6">{grade.description}</p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(grade.specs).map(([key, value]) => (
            <div key={key} className="bg-[#F8F6F2] rounded-lg p-4">
              <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-wider mb-1">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-sm font-medium text-[#2C2518]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
