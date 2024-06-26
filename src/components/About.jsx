import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import docker from "../assets/tech/docker.png"
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introducti</p> */}
        <h2 className={styles.sectionHeadText}>Overiew</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
     LegoConverter is an AI tool that converts outdated code into modernized
 code while maintaining efficiency and accuracy. It utilizes the Gemini AI, a next-generation model developed by Google known for its significant advancements in AI capabilities. Part of the Gemini series, this model is highly efficient and versatile, capable of handling a wide range of tasks with exceptional performance. Gemini 1.5 Ultra, the latest iteration, showcases improvements across various dimensions, achieving comparable quality to its predecessor, 1.0 Ultra, while utilizing fewer computational resources. A standout feature of Gemini 1.5 Ultra is its breakthrough in long-context understanding, allowing it to consistently process up to 1 million tokens, the longest context window of any large-scale foundation model to date. LegoConverter is developed by students of Maratha Mandal Engineering College, Belagavi.
        </motion.p>
     
    </>
  );
};

export default SectionWrapper(About, "about");
