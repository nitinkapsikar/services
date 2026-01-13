import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <motion.img
      src="/hero_bg.svg"
      alt="Abstract background"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-0 top-0 w-125 "
    />
  );
};

export default HeroBackground;
