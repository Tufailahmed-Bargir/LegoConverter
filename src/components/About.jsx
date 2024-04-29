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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overiew</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
       I'm a 3rd-year B.E student at Maratha Mandal Engineering College in Computer Science and Engineering, driven by a fascination with the ever-evolving tech landscape. I'm passionate about delving into emerging technologies, dissecting their unique features, and pushing their potential.
{/* <br /> */}
Armed with 1.5 years of experience as a full-stack developer, I've honed my skills in both front-end and back-end technologies, tackling projects for personal endeavors, college clubs, and beyond. A self-proclaimed problem-solver, I thrive on the challenge of complex projects, continuously pushing myself to learn and grow.

With a solid foundation in web development, I'm eager to leverage my skills and tackle new opportunities to craft innovative and user-friendly solutions. If you're seeking a dedicated and versatile full-stack developer, I'd be delighted to connect and discuss how I can contribute!
     
        </motion.p>
      <div className="mt-20 gap-10 flex flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
