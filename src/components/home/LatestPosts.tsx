import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
    thumbnail: "/images/layingyourselfone.webp",
  },
  {
    id: 2,
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
    thumbnail: "/images/Lyingyourselftwo.webp",
  },
  {
    id: 3,
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
    thumbnail: "/images/Lyingyourselfthree.webp",
  },
];

const LatestPosts = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#8676E0" }}
          >
            Our Latest News & Blog
          </h2>
          <button className="text-sm font-semibold border border-[#8676E0] px-4 py-2 rounded text-[#8676E0] hover:bg-[#8676E0]/10 transition">
            Explore all
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="border rounded-lg overflow-hidden shadow-md flex flex-col bg-white"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 sm:p-5 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Posted by {post.author} • {post.date}
                  </p>
                  <p className="text-xs text-gray-400 mb-1">
                    {post.category} • {post.readTime}
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                    {post.title}
                  </h3>
                </div>

                <button className="text-[#7748F1] text-sm font-semibold flex items-center gap-1 hover:underline">
                  Read More <FaArrowRight className="text-xs mt-[1px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
