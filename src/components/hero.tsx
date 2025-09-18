import ScrollVelocity from "./ui/scroll-velocity";
import Image from "next/image";
import { AnimatedCards, AnimatedCardsMobile } from "./ui/animated-cards";
import IcoButton from "./ui/ico-button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-start sm:justify-center flex-1 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pt-2 sm:pt-12 lg:pt-16">
        <p className="font-mona text-xl sm:text-2xl lg:text-3xl xl:text-4xl lowercase">
          <span className="block">Instantly create memecoins</span>
          <span className="block">with friends for free ✦</span>
        </p>
      </div>
      <div className="-mt-2 sm:mt-0">
        <ScrollVelocity
          texts={["No Dev, Just Friends."]}
          velocity={100}
          className="uppercase"
          scrollerClassName="!text-[clamp(2rem,10vh,6rem)] sm:!text-[clamp(2.2rem,12vh,7rem)]"
        />
      </div>
      {/* Mobile layout: ICO button centered */}
      <div className="flex flex-col items-center mt-2 sm:hidden relative z-10">
        <IcoButton />
        <p className="text-xs text-brand-gray mt-3 font-inter">
          ICO Sale is currently closed.
        </p>
      </div>

      {/* Mobile animated cards - left aligned below buttons */}
      <div className="flex justify-start pl-4 mt-2 sm:hidden relative z-50">
        <AnimatedCardsMobile />
      </div>

      {/* Desktop layout: circular text left, clouds right */}
      <div className="hidden sm:flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 relative z-50">
        <div className="flex flex-col items-center">
          <IcoButton />
          <p className="text-xs text-brand-gray mt-3 font-inter">
            ICO Sale is currently closed.
          </p>
        </div>
        <div className="flex-1 ml-8">
          <AnimatedCards />
        </div>
      </div>
      <div className="absolute bottom-0 -right-[10vw] sm:-right-[40vw] lg:right-0 z-10 w-[102vw] sm:w-[51vw] max-w-none flex items-end">
        <Image
          src="/Trail_darker.png"
          alt="Dark trail decoration"
          width={1600}
          height={800}
          className="object-contain max-sm:object-bottom max-sm:w-full max-sm:h-full 5xl:w-full"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
