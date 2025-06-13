import { FaBrain, FaDatabase, FaRobot } from "react-icons/fa";

const HowWeWorkAI = () => {
  return (
    <section className="bg-[#08001C] text-white px-4 md:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Content */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s see How do, We are works.
          </h2>
          <p className="text-gray-300">
            Sara specializes in data science, machine learning, and artificial
            intelligence, delivering business solutions with blazing speed and
            striking results.
          </p>
          <button className="mt-4 bg-white text-[#08001C] px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Get in Touch
          </button>
        </div>

        {/* Centered Image */}
        <div className="flex justify-center">
          <img
            src="/images/performance.webp" // replace with your actual image path
            alt="AI Work Illustration"
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>

        {/* Features Below Image */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center gap-4">
            <FaBrain className="text-4xl text-white" />
            <h3 className="text-lg font-semibold">
              Identify the <br /> problem with AI
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center gap-4">
            <FaDatabase className="text-4xl text-white" />
            <h3 className="text-lg font-semibold">
              Collect data with <br /> our advanced AI
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center gap-4">
            <FaRobot className="text-4xl text-white" />
            <h3 className="text-lg font-semibold">
              Deliver accurate data <br />
              solutions
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkAI;
