import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex mt-2 MyGradient overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img className="h-28 w-52 object-contain mix-blend-multiply" src={image} key={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img className="h-28 w-52 object-contain mix-blend-multiply" src={image} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
