import {motion} from "framer-motion";
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const stairLength = 8;
const reverseIndex = (index) => {
  return stairLength - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/*
        Rendering all steps of the stairs.
      */}
      {[...Array(stairLength)].map((_, index) => {
        return (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stairAnimation}
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1,
              ease: "easeInOut",
            }}
            className={`w-full h-full bg-white relative`}
          />
        );
      })}
    </>
  );
};

export default Stairs;
