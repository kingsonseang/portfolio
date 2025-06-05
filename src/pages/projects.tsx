import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Project cards will be added here */}
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold">Project Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stay tuned for exciting project showcases!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
