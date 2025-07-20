import React from "react";
import { Moon } from "lucide-react";

const GlassButton = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      {/* Optional glow or soft focus layer */}
      <div
        className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)",
          zIndex: -2,
        }}
      />

      {/* Glass Bubble Button */}
      <div
        className={`
          relative group
          w-[300px]
          p-6
          flex items-center gap-4
          rounded-[32px]
          bg-white/5
          backdrop-blur-[10px]
          text-white
          cursor-pointer
          overflow-hidden
          transition-all duration-500
          hover:-translate-y-2
        `}
        style={{
          WebkitBackdropFilter: "blur(30px)",
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: `
            inset -2px -2px 6px rgba(255, 255, 255, 0.4),
            inset 2px 2px 6px rgba(0, 0, 0, 0.15),
            0 4px 30px rgba(0, 0, 0, 0.2),
            0 0 8px rgba(255, 255, 255, 0.2)
          `,
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* Shine animation layer */}
        <div
          className="
            pointer-events-none
            absolute -top-24 -left-24 w-64 h-64
            bg-gradient-to-br from-white/50 via-white/5 to-transparent
            rounded-full
            opacity-0
            group-hover:opacity-60
            animate-shine
            blur-2xl
            transition-opacity duration-700
          "
        />

        {/* Inner ring border for bubble glow */}
        <div
          className="
            absolute inset-0 rounded-[32px]
            border border-white/20
            mix-blend-screen
            pointer-events-none
            z-10
            opacity-80
          "
        />

        {/* Icon */}
        <div
          className="
            relative
            bg-white/10
            p-3
            rounded-full
            backdrop-blur-md
            shadow-inner shadow-white/10
            group-hover:scale-110
            transition-transform duration-300
          "
        >
          <Moon size={24} className="text-white drop-shadow" />
        </div>

        {/* Label */}
        <span className="text-lg font-semibold drop-shadow-md select-none">
          Button Caption
        </span>

        {/* Shine animation */}
        <style>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%) translateY(-100%) rotate(45deg);
            }
            100% {
              transform: translateX(150%) translateY(150%) rotate(45deg);
            }
          }
          .animate-shine {
            animation: shine 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default GlassButton;
