"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function InvestButton({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative group px-8 py-4 rounded-full",
        "bg-brand-black text-white",
        "transform transition-all duration-300 ease-out",
        "hover:scale-110 active:scale-95",
        "shadow-lg hover:shadow-2xl",
        "border border-brand-black hover:border-yellow-400",
        "animate-bounce-gentle",
        "cursor-pointer",
        "mt-2",
        className
      )}
      style={{
        filter: isHovered
          ? "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 40px rgba(245, 158, 11, 0.6))"
          : undefined
      }}
    >
      {/* Breathing inner glow effect - Desktop */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none hidden sm:block"
        animate={isHovered ? {
          boxShadow: [
            "inset 0 0 30px rgba(255, 215, 0, 0.4)",
            "inset 0 0 60px rgba(255, 215, 0, 0.7), inset 0 0 80px rgba(245, 158, 11, 0.5)",
            "inset 0 0 30px rgba(255, 215, 0, 0.4)",
          ],
          opacity: [0.3, 0.6, 0.3]
        } : {
          boxShadow: [
            "inset 0 0 20px rgba(255, 255, 255, 0.2)",
            "inset 0 0 40px rgba(255, 255, 255, 0.4)",
            "inset 0 0 20px rgba(255, 255, 255, 0.2)",
          ],
          opacity: 0.2
        }}
        transition={{ duration: isHovered ? 1 : 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Breathing inner glow effect - Mobile (always active) */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none sm:hidden"
        animate={{
          boxShadow: [
            "inset 0 0 30px rgba(255, 215, 0, 0.4)",
            "inset 0 0 60px rgba(255, 215, 0, 0.7), inset 0 0 80px rgba(245, 158, 11, 0.5)",
            "inset 0 0 30px rgba(255, 215, 0, 0.4)",
          ],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sparkles on hover - Desktop */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-300 text-sm pointer-events-none"
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + (i % 2) * 20}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                y: [-5, -15, -5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Sparkles always visible - Mobile */}
      <motion.div
        className="absolute inset-0 pointer-events-none sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 text-sm pointer-events-none"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              y: [-5, -15, -5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>


      {/* Text with glow - Desktop */}
      <motion.span
        className={cn(
          "relative z-10 font-mona font-bold text-xl",
          "tracking-wider uppercase",
          "transition-all duration-300",
          "group-hover:tracking-[0.2em]",
          "flex items-center gap-2",
          "hidden sm:flex"
        )}
        animate={isHovered ? {
          textShadow: [
            "0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(245, 158, 11, 1), 0 0 40px rgba(255, 193, 7, 0.9)",
            "0 0 35px rgba(255, 215, 0, 1), 0 0 50px rgba(255, 193, 7, 1), 0 0 70px rgba(245, 158, 11, 0.8)",
            "0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(245, 158, 11, 1), 0 0 40px rgba(255, 193, 7, 0.9)"
          ]
        } : {
          textShadow: [
            "0 0 5px rgba(245, 158, 11, 0.8)",
            "0 0 15px rgba(245, 158, 11, 1)",
            "0 0 5px rgba(245, 158, 11, 0.8)"
          ]
        }}
        transition={{ duration: isHovered ? 0.8 : 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="inline-block"
          animate={isHovered ? { rotate: [0, 12, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          ✦
        </motion.span>
        INVEST
        <motion.span
          className="inline-block"
          animate={isHovered ? { rotate: [0, -12, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          ✦
        </motion.span>
      </motion.span>

      {/* Text with glow - Mobile (always active) */}
      <motion.span
        className={cn(
          "relative z-10 font-mona font-bold text-xl",
          "tracking-wider uppercase",
          "transition-all duration-300",
          "flex items-center gap-2",
          "sm:hidden"
        )}
        animate={{
          textShadow: [
            "0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(245, 158, 11, 1), 0 0 40px rgba(255, 193, 7, 0.9)",
            "0 0 35px rgba(255, 215, 0, 1), 0 0 50px rgba(255, 193, 7, 1), 0 0 70px rgba(245, 158, 11, 0.8)",
            "0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(245, 158, 11, 1), 0 0 40px rgba(255, 193, 7, 0.9)"
          ]
        }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="inline-block"
          animate={{ rotate: [0, 12, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          ✦
        </motion.span>
        INVEST
        <motion.span
          className="inline-block"
          animate={{ rotate: [0, -12, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          ✦
        </motion.span>
      </motion.span>
    </button>
  );
}