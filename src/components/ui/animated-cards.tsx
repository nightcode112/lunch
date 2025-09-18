"use client";

import { motion, AnimatePresence, useAnimation } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";

type Card = {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
};

const cards: Card[] = [
  {
    number: "1",
    title: "Create or Join",
    description: "Create or join a Lunch Table with your verified X.",
    bgColor: "bg-brand-magenta",
    textColor: "text-brand-off-white",
  },
  {
    number: "2",
    title: "Launch Together",
    description:
      "Once the table is full, everyone gets their allocation and the token goes live for the public.",
    bgColor: "bg-brand-blue",
    textColor: "text-brand-off-white",
  },
  {
    number: "3",
    title: "Track & Earn",
    description:
      "Track your stats against friends, earn badges and join more lunches!",
    bgColor: "bg-brand-pink",
    textColor: "text-brand-gray",
  },
];

export const AnimatedCards = ({ autoplay = true }: { autoplay?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; color: string }>
  >([]);
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const [clickEffect, setClickEffect] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const floatControls = useAnimation();
  const breatheControls = useAnimation();
  const wiggleControls = useAnimation();

  const renderCard = (card: Card, index: number) => {
    const cardColors = {
      0: {
        bgGradient: "from-brand-magenta via-pink-400 to-purple-500",
        hoverBg: "linear-gradient(45deg, #ff6b9d, #c44569, #f8b500)",
        borderColor: "#ff6b9d",
        textGradient: "from-brand-magenta via-purple-500 to-pink-500",
        titleGradient: "from-brand-magenta via-purple-600 to-pink-600",
        underlineGradient: "from-brand-magenta via-purple-500 to-pink-500",
      },
      1: {
        bgGradient: "from-brand-blue via-blue-400 to-cyan-500",
        hoverBg: "linear-gradient(45deg, #4ecdc4, #44a08d, #096dd9)",
        borderColor: "#4ecdc4",
        textGradient: "from-brand-blue via-cyan-500 to-teal-500",
        titleGradient: "from-brand-blue via-cyan-600 to-teal-600",
        underlineGradient: "from-brand-blue via-cyan-500 to-teal-500",
      },
      2: {
        bgGradient: "from-brand-pink via-pink-400 to-rose-500",
        hoverBg: "linear-gradient(45deg, #ffeaa7, #fab1a0, #fd79a8)",
        borderColor: "#fd79a8",
        textGradient: "from-brand-pink via-rose-500 to-pink-600",
        titleGradient: "from-brand-pink via-rose-600 to-pink-700",
        underlineGradient: "from-brand-pink via-rose-500 to-pink-600",
      },
    };

    const colors = cardColors[index as keyof typeof cardColors];
    const underlineWidths = ["80%", "85%", "75%"];

    return (
      <motion.div className="relative" animate={breatheControls}>
        <motion.div
          className={`absolute top-3 left-3 bg-gradient-to-br ${colors.bgGradient} rounded-4xl w-full h-full shadow-lg`}
          animate={wiggleControls}
          whileHover={{
            background: colors.hoverBg,
            boxShadow: `0 10px 20px ${colors.borderColor}40`,
            scale: 1.02,
          }}
        />
        <motion.div
          className="relative bg-white rounded-4xl p-2 sm:p-4 md:p-6 lg:p-8 xl:p-4 3xl:p-10 4xl:p-12 5xl:p-16 text-center max-w-full z-10 border-2 border-transparent aspect-square flex flex-col justify-center"
          whileHover={{
            borderColor: colors.borderColor,
            boxShadow: `0 0 15px ${colors.borderColor}30, inset 0 0 10px ${colors.borderColor}10`,
            background: "linear-gradient(135deg, #ffffff, #fef7f7)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
            <span className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-lg 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-transparent bg-gradient-to-r ${colors.textGradient} bg-clip-text`}>✦</span>
            <motion.div
              className={`inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-6 xl:h-6 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 5xl:w-16 5xl:h-16 rounded-full bg-gradient-to-br ${colors.bgGradient}`}
              whileHover={{
                scale: 1.15,
                rotate: [0, 5, -5, 0],
                boxShadow: `0 0 20px ${colors.borderColor}80`,
              }}
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-base 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-bold text-white">
                {card.number}
              </span>
            </motion.div>
            <span className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-lg 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-transparent bg-gradient-to-r ${colors.textGradient} bg-clip-text`}>✦</span>
          </div>
          <motion.h3
            className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-sm 3xl:text-xl 4xl:text-2xl 5xl:text-3xl font-bold mb-1 sm:mb-2 text-transparent bg-gradient-to-r ${colors.titleGradient} bg-clip-text relative`}
            whileHover={{
              scale: 1.05,
              textShadow: `0 0 8px ${colors.borderColor}60`,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            {card.title}
            <div
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r ${colors.underlineGradient} rounded-full`}
              style={{ width: underlineWidths[index] }}
            />
          </motion.h3>
          <motion.p
            className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xs 3xl:text-base 4xl:text-lg 5xl:text-xl leading-relaxed font-inter text-brand-gray"
            whileHover={{
              color: colors.borderColor,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {card.description}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  };

  const triggerSparkles = useCallback(() => {
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 300,
      y: Math.random() * 300,
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 2000);
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setClickEffect({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        color: ["#ff6b9d", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"][
          Math.floor(Math.random() * 5)
        ],
      }));
      setParticles(newParticles);

      setTimeout(() => setClickEffect(null), 800);
      setTimeout(() => setParticles([]), 1500);
    }
    triggerSparkles();
  };

  useEffect(() => {
    // Start staggered entrance animation first
    setTimeout(() => {
      floatControls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }, 1400); // Wait for entrance animation to complete (0.8s duration + 0.8s last delay)

    breatheControls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });

    const wiggleInterval = setInterval(() => {
      wiggleControls.start({
        rotate: [0, 2, -2, 1, -1, 0],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      });
    }, 5000 + Math.random() * 3000);

    return () => clearInterval(wiggleInterval);
  }, [floatControls, breatheControls, wiggleControls]);

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) triggerSparkles();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered, triggerSparkles]);

  return (
    <div
      className="w-full px-2 py-8 sm:py-12 md:py-16 lg:py-20 font-inter text-white mt-4 sm:mt-0 hidden md:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <div
          className="relative w-full max-w-2xl xl:max-w-2xl mx-auto h-[500px] xl:h-[520px]"
        >
          {cards.map((card, index) => {
            // Position cards in diagonal 3x3 grid pattern:
            // Card 1 (bottom-left), Card 2 (center), Card 3 (top-right)
            const positions = [
              { top: "60%", left: "-25%" }, // Card 1 - bottom left
              { top: "25%", left: "0%" }, // Card 2 - center
              { top: "-10%", left: "25%" }, // Card 3 - top right
            ];

            return (
              <motion.div
                key={card.number}
                ref={index === 0 ? containerRef : undefined}
                className="absolute aspect-square h-20 w-20 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-44 xl:w-44 3xl:h-64 3xl:w-64 4xl:h-72 4xl:w-72 5xl:h-80 5xl:w-80 cursor-pointer"
                style={{
                  top: positions[index].top,
                  left: positions[index].left,
                }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 },
                  }}
                  onClick={handleCardClick}
                >
                  <motion.div animate={floatControls} className="w-full h-full">
                    {renderCard(card, index)}
                  </motion.div>
                </motion.div>
              );
            })}

          {/* Sparkles */}
          <AnimatePresence>
            {sparkles.map((sparkle) => (
              <motion.div
                key={sparkle.id}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full pointer-events-none"
                style={{
                  left: sparkle.x,
                  top: sparkle.y,
                }}
                initial={{ scale: 0, rotate: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  y: [0, -50, -100],
                  x: [
                    0,
                    (Math.random() - 0.5) * 40,
                    (Math.random() - 0.5) * 80,
                  ],
                  opacity: [1, 1, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
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
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </AnimatePresence>

          {/* Click Effect */}
          <AnimatePresence>
            {clickEffect && (
              <motion.div
                className="absolute border-4 border-pink-400 rounded-full pointer-events-none z-40"
                style={{
                  left: clickEffect.x - 25,
                  top: clickEffect.y - 25,
                  width: 50,
                  height: 50,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1.5, 2],
                  opacity: [1, 0.6, 0],
                  borderWidth: [4, 2, 0],
                }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            )}
          </AnimatePresence>

          {/* Floating Stars */}
          {isHovered && (
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-2xl"
              initial={{ y: 0, opacity: 0, scale: 0 }}
              animate={{
                y: [-10, -30, -50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0.8],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              ✨
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AnimatedCardsMobile = ({
  autoplay = true,
}: {
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-xs px-2 py-4 font-inter text-white">
      <div className="relative">
        <div className="flex items-center justify-start">
          <div className="relative h-40 w-40">
            <AnimatePresence mode="wait">
              {active === 0 && (
                <motion.div
                  key="card-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute top-6 left-6 bg-gradient-to-br from-brand-magenta via-pink-400 to-purple-500 rounded-4xl w-full h-full shadow-lg"></div>
                    <div className="relative bg-white rounded-4xl p-4 text-center max-w-full z-10 aspect-square flex flex-col justify-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-base text-brand-magenta">✦</span>
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brand-magenta via-pink-400 to-purple-500">
                          <span className="text-base font-black font-mona text-white">1</span>
                        </div>
                        <span className="text-base text-brand-magenta">✦</span>
                      </div>
                      <h3 className="text-sm font-bold font-mona mb-2 text-transparent bg-gradient-to-r from-brand-magenta via-purple-600 to-pink-600 bg-clip-text relative">
                        Create or Join
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brand-magenta via-purple-500 to-pink-500 rounded-full" style={{ width: "80%" }} />
                      </h3>
                      <p className="text-xs leading-tight font-inter text-brand-gray">
                        Create or join a Lunch Table with your verified X.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {active === 1 && (
                <motion.div
                  key="card-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute top-6 left-6 bg-gradient-to-br from-brand-blue via-blue-400 to-cyan-500 rounded-4xl w-full h-full shadow-lg"></div>
                    <div className="relative bg-white rounded-4xl p-4 text-center max-w-full z-10 aspect-square flex flex-col justify-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-base text-brand-blue">✦</span>
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue via-blue-400 to-cyan-500">
                          <span className="text-base font-black font-mona text-white">2</span>
                        </div>
                        <span className="text-base text-brand-blue">✦</span>
                      </div>
                      <h3 className="text-sm font-bold font-mona mb-2 text-transparent bg-gradient-to-r from-brand-blue via-cyan-600 to-teal-600 bg-clip-text relative">
                        Launch Together
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brand-blue via-cyan-500 to-teal-500 rounded-full" style={{ width: "85%" }} />
                      </h3>
                      <p className="text-xs leading-tight font-inter text-brand-gray">
                        Once the table is full, everyone gets their allocation
                        and the token goes live for the public.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {active === 2 && (
                <motion.div
                  key="card-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute top-6 left-6 bg-gradient-to-br from-brand-pink via-pink-400 to-rose-500 rounded-4xl w-full h-full shadow-lg"></div>
                    <div className="relative bg-white rounded-4xl p-4 text-center max-w-full z-10 aspect-square flex flex-col justify-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-base text-brand-pink">✦</span>
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brand-pink via-pink-400 to-rose-500">
                          <span className="text-base font-black font-mona text-white">3</span>
                        </div>
                        <span className="text-base text-brand-pink">✦</span>
                      </div>
                      <h3 className="text-sm font-bold font-mona mb-2 text-transparent bg-gradient-to-r from-brand-pink via-rose-600 to-pink-700 bg-clip-text relative">
                        Track & Earn
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brand-pink via-rose-500 to-pink-600 rounded-full" style={{ width: "75%" }} />
                      </h3>
                      <p className="text-xs leading-tight font-inter text-brand-gray">
                        Track your stats against friends, earn badges and join
                        more lunches!
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
