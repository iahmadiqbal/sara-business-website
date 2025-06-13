const Gallery = () => {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Trusted by{" "}
          <span className="text-[#111827] underline underline-offset-4 decoration-[#111827]">
            15,000+
          </span>{" "}
          Customers
        </h2>
      </div>

      <div className="overflow-x-hidden w-full">
        <div className="flex w-[200%] animate-scroll-x items-center gap-10 px-4">
          <img
            src="/images/square.svg"
            alt="square"
            className="h-10 w-auto object-contain shrink-0"
          />
          <img
            src="/images/gobana.svg"
            alt="gobana"
            className="h-10 w-auto object-contain shrink-0"
          />
          <img
            src="/images/paperz.svg"
            alt="paperz"
            className="h-10 w-auto object-contain shrink-0"
          />
          <img
            src="/images/dorfus.svg"
            alt="dorfus"
            className="h-10 w-auto object-contain shrink-0"
          />
          <img
            src="/images/martino.svg"
            alt="martino"
            className="h-10 w-auto object-contain shrink-0"
          />
        </div>
      </div>

      {/* Horizontal line below logos */}
      <hr className="mt-8 border-t border-gray-300 w-full" />

      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-x {
            animation: scroll-x 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
