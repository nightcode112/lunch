"use client";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);
  const [clickEffect, setClickEffect] = useState<{x: number, y: number} | null>(null);

  const triggerParticles = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.width / 2,
      y: rect.height / 2,
      color: ['#fbbf24', '#a855f7', '#ec4899', '#8b5cf6', '#f59e0b'][Math.floor(Math.random() * 5)],
    }));
    setParticles(newParticles);
    setClickEffect({ x: rect.width / 2, y: rect.height / 2 });

    setTimeout(() => setParticles([]), 2000);
    setTimeout(() => setClickEffect(null), 1000);
  }, []);

  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 px-4 sm:px-6 lg:px-8 xl:px-10 bg-transparent gap-4 sm:gap-0">
      {/* Mobile layout: stacked */}
      <div className="flex justify-between items-center sm:hidden">
        <Link href="/">
          <Image
            src="/LogoText.png"
            alt="lunch logo with text"
            width={160}
            height={40}
            className="h-10 w-auto cursor-pointer"
            priority
            unoptimized
          />
        </Link>
        <motion.a
          href="https://x.com/lunchdotfun"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full font-bold text-base overflow-hidden group"
          style={{
            filter: "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.4)) drop-shadow(0 4px 8px rgba(245, 158, 11, 0.3))"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={triggerParticles}
          whileHover={{
            scale: 1.1,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          animate={{
            boxShadow: isHovered
              ? ["0 0 20px rgba(168, 85, 247, 0.6)", "0 0 30px rgba(245, 158, 11, 0.8)", "0 0 20px rgba(168, 85, 247, 0.6)"]
              : ["0 8px 16px rgba(168, 85, 247, 0.4)", "0 12px 20px rgba(245, 158, 11, 0.3)", "0 8px 16px rgba(168, 85, 247, 0.4)"],
            backgroundColor: isHovered ? "#1f2937" : "#000000",
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity },
            backgroundColor: { duration: 0.3 }
          }}
        >
          {/* Animated background waves */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 0% 50%, rgba(168, 85, 247, 0.8) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 50%, rgba(245, 158, 11, 0.8) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 50%, rgba(168, 85, 247, 0.8) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <BsTwitterX className="h-4 w-4 relative z-10" />
          </motion.div>

          <motion.span
            className="relative z-10"
            animate={isHovered ? {
              textShadow: ["0 0 5px rgba(255,255,255,0.8)", "0 0 10px rgba(255,255,255,1)", "0 0 5px rgba(255,255,255,0.8)"]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Follow @lunchdotfun
          </motion.span>

          {/* Floating sparkles on hover */}
          <AnimatePresence>
            {isHovered && Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-80"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                }}
                initial={{ scale: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  y: [-20, -40],
                  x: [(Math.random() - 0.5) * 20],
                  rotate: [0, 180],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </AnimatePresence>

          {/* Particles */}
          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 rounded-full pointer-events-none z-50"
                style={{
                  backgroundColor: particle.color,
                  left: particle.x,
                  top: particle.y,
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [1, 0.5, 0],
                  opacity: [1, 0.8, 0],
                  x: [(Math.random() - 0.5) * 100],
                  y: [(Math.random() - 0.5) * 100],
                  rotate: [0, Math.random() * 360],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>

          {/* Click effect */}
          <AnimatePresence>
            {clickEffect && (
              <motion.div
                className="absolute border-2 border-white rounded-full pointer-events-none"
                style={{
                  left: clickEffect.x - 20,
                  top: clickEffect.y - 20,
                  width: 40,
                  height: 40,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 2, 3],
                  opacity: [1, 0.5, 0],
                }}
                exit={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </motion.a>
      </div>

      {/* Desktop layout: three columns */}
      <div className="hidden sm:flex items-center">
        <Link href="/">
          <Image
            src="/LogoText.png"
            alt="lunch logo with text"
            width={160}
            height={40}
            className="h-12 lg:h-12 xl:h-14 w-auto cursor-pointer"
            priority
            unoptimized
          />
        </Link>
      </div>
      <nav aria-label="Main navigation" className="hidden sm:flex items-center">
        <motion.a
          href="https://x.com/lunchdotfun"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-3 bg-black text-white px-6 py-3 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-full font-bold text-lg lg:text-lg xl:text-xl overflow-hidden group"
          style={{
            filter: "drop-shadow(0 12px 24px rgba(168, 85, 247, 0.5)) drop-shadow(0 8px 16px rgba(245, 158, 11, 0.4))"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={triggerParticles}
          whileHover={{
            scale: 1.05,
            rotate: [0, -1, 1, 0],
            y: -2,
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          animate={{
            boxShadow: isHovered
              ? [
                  "0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)",
                  "0 0 40px rgba(245, 158, 11, 0.9), 0 0 80px rgba(168, 85, 247, 0.5)",
                  "0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)"
                ]
              : [
                  "0 12px 24px rgba(168, 85, 247, 0.5), 0 8px 16px rgba(245, 158, 11, 0.4)",
                  "0 16px 32px rgba(245, 158, 11, 0.4), 0 12px 24px rgba(168, 85, 247, 0.3)",
                  "0 12px 24px rgba(168, 85, 247, 0.5), 0 8px 16px rgba(245, 158, 11, 0.4)"
                ],
            backgroundColor: isHovered ? "#1f2937" : "#000000",
          }}
          transition={{
            boxShadow: { duration: 2.5, repeat: Infinity },
            backgroundColor: { duration: 0.3 }
          }}
        >
          {/* Animated background waves */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 0% 50%, rgba(168, 85, 247, 0.9) 0%, transparent 70%)",
                "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.9) 0%, transparent 70%)",
                "radial-gradient(circle at 100% 50%, rgba(236, 72, 153, 0.9) 0%, transparent 70%)",
                "radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.9) 0%, transparent 70%)",
                "radial-gradient(circle at 0% 50%, rgba(168, 85, 247, 0.9) 0%, transparent 70%)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Rotating X icon */}
          <motion.div
            animate={{
              rotate: 360,
              scale: isHovered ? [1, 1.2, 1] : 1
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.5 }
            }}
          >
            <BsTwitterX className="h-5 w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 relative z-10" />
          </motion.div>

          {/* Glowing text */}
          <motion.span
            className="relative z-10"
            animate={isHovered ? {
              textShadow: [
                "0 0 5px rgba(255,255,255,0.8)",
                "0 0 15px rgba(255,255,255,1), 0 0 25px rgba(245,158,11,0.8)",
                "0 0 5px rgba(255,255,255,0.8)"
              ]
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Follow @lunchdotfun
          </motion.span>

          {/* Enhanced floating sparkles */}
          <AnimatePresence>
            {isHovered && Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none z-30"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                initial={{ scale: 0, y: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0.8, 0],
                  y: [-30, -60, -80],
                  x: [(Math.random() - 0.5) * 40],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0.8, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              >
                ✨
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Enhanced particles */}
          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full pointer-events-none z-50"
                style={{
                  backgroundColor: particle.color,
                  left: particle.x,
                  top: particle.y,
                  boxShadow: `0 0 10px ${particle.color}`,
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [1, 0.3, 0],
                  opacity: [1, 0.9, 0],
                  x: [(Math.random() - 0.5) * 150],
                  y: [(Math.random() - 0.5) * 150],
                  rotate: [0, Math.random() * 720],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>

          {/* Enhanced click effect */}
          <AnimatePresence>
            {clickEffect && (
              <>
                <motion.div
                  className="absolute border-4 border-white rounded-full pointer-events-none z-40"
                  style={{
                    left: clickEffect.x - 25,
                    top: clickEffect.y - 25,
                    width: 50,
                    height: 50,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 2.5, 4],
                    opacity: [1, 0.6, 0],
                    borderWidth: [4, 2, 0],
                  }}
                  exit={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute border-2 border-yellow-300 rounded-full pointer-events-none z-40"
                  style={{
                    left: clickEffect.x - 15,
                    top: clickEffect.y - 15,
                    width: 30,
                    height: 30,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 3, 5],
                    opacity: [1, 0.4, 0],
                  }}
                  exit={{ scale: 5, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                />
              </>
            )}
          </AnimatePresence>

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
        </motion.a>
      </nav>
    </header>
  );
}
