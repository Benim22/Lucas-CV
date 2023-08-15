"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Lucas");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Personlig Presentation</SectionHeading>
      <p className="mb-3">
        Hej där! Jag är Lucas, en 28-åring med en djup passion för allt som har med {" "}
        <span className="font-medium">IT och kodning</span> att göra. De senaste 5 åren har jag ägnat mig åt att verkligen 
        fördjupa mig inom programmering och innan det så arbetade jag inom byggbranschen som
        takläggare och svetsare men även inom livsmedelsindustrin, jag valde att börja studera och väntar just nu svar från en 
        högskoleutbildning. {" "}
        <span className="font-medium">De senaste 2 åren har jag fokuserat på ReactJS och alla dess funktioner</span>.{" "}
        <span className="italic">Det bästa med programmering enligt mig är</span> den del som handlar om problemlösning.  <span className="underline">Jag uppskattar</span> känslan
        när jag finner en lösning. Idag har jag erfarenhet av  {" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB och fler
        </span>
        .  Jag har även erfarenhet av Sanity, Cloudinary och API integrationer. 
         Jag är alltid ivrig att lära mig nya teknologier, 
        just nu har jag ett stort intresse för{" "}
        <span className="font-medium"><br />Artificiell Intelligens eller AI</span> 
      </p>

      <p>
        <span className="italic">När jag inte kodar</span>, så tycker jag om att
        spela datorspel, kolla serier och träna på allt möjligt. Jag tycker även om att{" "}
        <span className="font-medium">lära mig nya saker</span>. Det kan vara historia eller 
        något som har med den digitala världen att göra.{" "}
        <span className="font-medium">Att skapa och driva projekt</span> är något som jag tycker är 
        väldigt roligt och ser fram emot att skapa många fler i framtiden.
      </p>
    </motion.section>
  );
}
