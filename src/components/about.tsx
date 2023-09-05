"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { MotionList } from "./motion-list";
import { skillList } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span id="about-ln-1">
          After graduating with a degree in{" "}
          <span className="font-medium">Bachelor of Technology</span>, I decided
          to pursue my passion for web development and problem solving.{" "}
        </span>
        <span id="about-ln-2">
          I offer business solutions to design, develop and test both client and
          server sided infrastructures.{" "}
        </span>
        <br />
        <span id="about-ln-3">
          My primary tech offerings are focussed on{" "}
          <span className="font-bold">
            JavaScript and TypeScript
          </span>{" "}
          based technologies.{" "}
          <span>
            I am proficeint with most majorly used frameworks and libraries,
            along with extensive knowledge on non-relational DBMs and Amazon
            AWS.
          </span>
        </span>
      </p>
      <MotionList listItems={skillList} />
    </motion.section>
  );
}
