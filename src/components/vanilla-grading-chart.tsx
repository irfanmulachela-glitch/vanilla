"use client";

import { useState } from "react";

type Grade = "gourmet" | "a" | "b";

const grades = {
  gourmet: {
    name: "Gourmet",
    label: "GOURMET",
    range: "18 – 22 cm",
    description: "Premium long beans with maximum vanillin content. Perfect for retail display, pastry, and culinary applications where presentation matters.",
    color: "#1a1410",
    specs: {
      length: "18-22 cm",
      moisture: "30-35%",
      vanillin: "1.8-2.7%",
      appearance: "Plump, oily, visible vanillin crystals, glossy surface",
    },
  },
  a: {
    name: "Grade A",
    label: "GRADE A",
    range: "15 – 17 cm",
    description: "Standard gourmet quality beans for retail and food service. Consistent moisture and vanillin content for reliable results.",
    color: "#2C2518",
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
    color: "#4A3F2F",
    specs: {
      length: "10-14 cm",
      moisture: "15-25%",
      vanillin: "1.3-2.2%",
      appearance: "Dry, thinner, may have split ends",
    },
  },
};

const beans = [
  { height: 352, label: "22 cm", grade: "gourmet" as const },
  { height: 304, label: "18 cm", grade: "gourmet" as const },
  { height: 272, label: "17 cm", grade: "a" as const },
  { height: 240, label: "15 cm", grade: "a" as const },
  { height: 208, label: "14 cm", grade: "b" as const },
  { height: 176, label: "12 cm", grade: "b" as const },
  { height: 160, label: "10 cm", grade: "b" as const },
];

export default function VanillaGradingChart() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>("gourmet");
  const grade = grades[selectedGrade];

  return (
    <div className="bg-[#F8F6F2] rounded-2xl p-8 lg:p-12 border border-[#E5E0D8]">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em] mb-3">
          Grading · Printed to Scale
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold text-[#2C2518]">
          The three grades, at actual size
        </h3>
      </div>

      {/* Visual Chart */}
      <div className="relative mb-8">
        <div className="flex">
          {/* Scale ruler */}
          <div className="relative w-16 flex-shrink-0">
            <div className="absolute left-0 top-0 bottom-0 border-l-2 border-[#B5A37A]/30" />
            {[0, 5, 10, 15, 20].map((cm) => (
              <div
                key={cm}
                className="absolute left-0 flex items-center"
                style={{ top: `${(cm / 22) * 100}%` }}
              >
                <div className="w-4 h-px bg-[#B5A37A]" />
                <span className="ml-2 text-xs text-[#B5A37A] font-medium">
                  {cm}
                </span>
              </div>
            ))}
            <div className="absolute left-0 bottom-0 text-xs text-[#B5A37A] font-medium mt-2">
              CM
            </div>
          </div>

          {/* Beans container */}
          <div className="flex-1 flex items-end justify-center gap-4 lg:gap-8 pb-16">
            {beans.map((bean, index) => {
              const isActive = selectedGrade === bean.grade;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {/* Bean SVG */}
                  <svg
                    width="32"
                    height={bean.height}
                    viewBox={`0 0 32 ${bean.height}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-10"
                  >
                    <defs>
                      <linearGradient
                        id={`bean-${index}`}
                        x1="16"
                        y1="0"
                        x2="16"
                        y2={bean.height}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor={grades[bean.grade].color} />
                        <stop
                          offset="50%"
                          stopColor={grades[bean.grade].color}
                          stopOpacity="0.9"
                        />
                        <stop offset="100%" stopColor={grades[bean.grade].color} />
                      </linearGradient>
                    </defs>
                    <path
                      d={`M16 0 C16 0, 28 ${bean.height * 0.1}, 30 ${bean.height * 0.3} C32 ${bean.height * 0.5}, 30 ${bean.height * 0.8}, 16 ${bean.height} C0 ${bean.height * 0.8}, -2 ${bean.height * 0.5}, 2 ${bean.height * 0.3} C4 ${bean.height * 0.1}, 16 0, 16 0 Z`}
                      fill={`url(#bean-${index})`}
                    />
                  </svg>
                  
                  {/* Dashed line and label */}
                  <div className="mt-2 text-center">
                    <div className="w-12 border-t border-dashed border-[#B5A37A]/50 mx-auto mb-1" />
                    <p className="text-xs font-medium text-[#2C2518]">
                      {bean.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grade Selector */}
      <div className="flex justify-center gap-8 lg:gap-16 mb-8">
        {(Object.keys(grades) as Grade[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedGrade(key)}
            className={`text-center transition-all ${
              selectedGrade === key
                ? "opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            <div
              className={`w-full h-0.5 rounded-full mb-3 ${
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
