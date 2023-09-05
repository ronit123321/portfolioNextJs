import { motion } from "framer-motion";

type HoverButtonProps = {
  name: string;
  imageSource: any;
};

export const HoverButton = ({ name, imageSource }: HoverButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{
      backgroundImage: `${imageSource}`,
    }}
  >
    {name}
  </motion.button>
);
