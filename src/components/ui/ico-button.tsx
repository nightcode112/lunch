"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export default function IcoButton({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.a
      href="https://twitter.com/lunchdotfun"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative group px-10 py-5 rounded-full",
        "bg-brand-black text-white",
        "transform transition-all duration-300 ease-out",
        "hover:scale-110 active:scale-95",
        "shadow-lg hover:shadow-xl",
        "border border-brand-black hover:border-brand-magenta",
        "cursor-pointer",
        "inline-block",
        className
      )}
      animate={{
        filter: isHovered
          ? [
              "drop-shadow(0 0 20px oklch(0.805 0.17 74.3 / 0.8)) drop-shadow(0 0 40px oklch(0.805 0.17 74.3 / 0.6))",
              "drop-shadow(0 0 20px oklch(0.85 0.118 321.7 / 0.8)) drop-shadow(0 0 40px oklch(0.85 0.118 321.7 / 0.6))",
              "drop-shadow(0 0 20px oklch(0.711 0.144 231.7 / 0.8)) drop-shadow(0 0 40px oklch(0.711 0.144 231.7 / 0.6))",
              "drop-shadow(0 0 20px oklch(0.717 0.258 322.7 / 0.8)) drop-shadow(0 0 40px oklch(0.717 0.258 322.7 / 0.6))",
              "drop-shadow(0 0 20px oklch(0.805 0.17 74.3 / 0.8)) drop-shadow(0 0 40px oklch(0.805 0.17 74.3 / 0.6))"
            ]
          : undefined,
      }}
      transition={{
        filter: { duration: 8, repeat: Infinity, ease: "linear" },
      }}
      whileHover={{
        y: -2,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 },
      }}
      whileTap={{
        y: 1,
        transition: { duration: 0.1 },
      }}
    >
      {/* Animated background waves */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, oklch(0.805 0.17 74.3 / 0.8) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 0%, oklch(0.85 0.118 321.7 / 0.8) 0%, transparent 70%)",
            "radial-gradient(circle at 100% 50%, oklch(0.711 0.144 231.7 / 0.8) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 100%, oklch(0.717 0.258 322.7 / 0.8) 0%, transparent 70%)",
            "radial-gradient(circle at 0% 50%, oklch(0.805 0.17 74.3 / 0.8) 0%, transparent 70%)",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Breathing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none opacity-20"
        animate={{
          boxShadow: [
            "inset 0 0 20px rgba(255, 255, 255, 0.2)",
            "inset 0 0 40px rgba(255, 255, 255, 0.4)",
            "inset 0 0 20px rgba(255, 255, 255, 0.2)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Coins image in top left */}
      <div className="absolute -top-6 -left-6 z-20 h-full flex items-center pl-2">
        <Image
          src="/Coins.png"
          alt="Coins"
          width={100}
          height={100}
          className="h-full w-auto"
          unoptimized
        />
      </div>

      {/* Sparkles on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-brand-magenta text-sm pointer-events-none"
              style={{
                left: `${15 + i * 20}%`,
                top: `${25 + (i % 2) * 25}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                y: [-5, -15, -5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            >
              ✦
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.span
        className={cn(
          "relative z-10 font-mona font-bold text-lg",
          "tracking-wider uppercase",
          "flex items-center gap-2"
        )}
        animate={isHovered ? {
          textShadow: [
            "0 0 5px rgba(255,255,255,0.8)",
            "0 0 15px rgba(255,255,255,1), 0 0 25px oklch(0.805 0.17 74.3 / 0.8)",
            "0 0 20px oklch(0.85 0.118 321.7), 0 0 30px oklch(0.85 0.118 321.7), 0 0 40px oklch(0.85 0.118 321.7 / 0.9)",
            "0 0 20px oklch(0.711 0.144 231.7), 0 0 30px oklch(0.711 0.144 231.7), 0 0 40px oklch(0.711 0.144 231.7 / 0.9)",
            "0 0 5px rgba(255,255,255,0.8)"
          ]
        } : {
          textShadow: [
            "0 0 5px oklch(0.805 0.17 74.3 / 0.8)",
            "0 0 15px oklch(0.85 0.118 321.7 / 0.8)",
            "0 0 5px oklch(0.711 0.144 231.7 / 0.8)",
            "0 0 15px oklch(0.717 0.258 322.7 / 0.8)",
          ]
        }}
        transition={{ duration: isHovered ? 1.5 : 8, repeat: Infinity, ease: isHovered ? "easeInOut" : "linear" }}
      >
        <motion.span
          className="inline-block"
          animate={isHovered ? { rotate: [0, 12, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          ✦
        </motion.span>
        Enter The Public ICO
        <motion.span
          className="inline-block"
          animate={isHovered ? { rotate: [0, -12, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          ✦
        </motion.span>
      </motion.span>
    </motion.a>
  );
}
