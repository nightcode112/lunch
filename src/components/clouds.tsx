export default function Clouds() {
  return (
    <div className="absolute hidden sm:block z-10 bottom-0 left-1/2 transform -translate-x-1/2 font-inter text-center text-white w-full px-5 scale-50 sm:scale-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">How does Lunch work?</h2>

      <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-red-600 rounded-4xl py-2 px-3 sm:py-6 sm:px-8 text-center">
          <div className="text-sm sm:text-2xl font-bold mb-1 sm:mb-4">1</div>
          <div className="text-xs sm:text-base">Create or join a Lunch Table with your verified X.</div>
        </div>
        <div className="bg-red-600 rounded-4xl py-2 px-3 sm:py-6 sm:px-8 text-center">
          <div className="text-sm sm:text-2xl font-bold mb-1 sm:mb-4">2</div>
          <div className="text-xs sm:text-base">
            Once the table is full, everyone gets their allocation and the token
            goes live for the public.
          </div>
        </div>
        <div className="bg-red-600 rounded-4xl py-2 px-3 sm:py-6 sm:px-8 text-center">
          <div className="text-sm sm:text-2xl font-bold mb-1 sm:mb-4">3</div>
          <div className="text-xs sm:text-base">
            Track your stats against friends, earn badges and join more lunches!
          </div>
        </div>
      </div>
    </div>
  );
}
