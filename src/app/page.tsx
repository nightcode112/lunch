import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh relative bg-[url('/RainbowCropped.png')] bg-cover bg-center">
      <div className="relative z-10 flex flex-col h-dvh">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
