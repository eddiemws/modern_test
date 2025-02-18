import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.postimg.cc/NMJrLhyw/Kitchen-towels.jpg",
  "https://i.postimg.cc/NMJrLhyw/Kitchen-towels.jpg",
  "https://i.postimg.cc/NMJrLhyw/Kitchen-towels.jpg",
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Dummy Hosted Site</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-40 object-cover rounded" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
