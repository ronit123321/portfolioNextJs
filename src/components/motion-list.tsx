import { Skill } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import "./styles.css";

type MotionListProps = {
  listItems: Skill[];
};

export const MotionList = ({ listItems }: MotionListProps) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ul
      className="motionlist"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {listItems.map((listItem) => (
        <motion.li
          key={listItem.name}
          className="motionitem"
          variants={item}
          whileHover={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={`${listItem.src}`}
            alt={listItem.name}
            width="100"
            height="64"
            quality="100"
            className="object-cover"
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
