import { motion } from "motion/react";
import Skills from "./skills";
import Projects from "./projects";

export default function Presentation() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Orbit />
      <div className=" z-[2] text-center w-[80%] top-[100px] absolute justify-center flex  flex-col items-center ">
        <h2>Hello</h2>
        <h2>what's your name? mine is</h2>
        <h1 className="font-semibold">Breiddy García</h1>

        <p>
          Im a {new Date().getFullYear() - new Date("2004-02-05").getFullYear()}{" "}
          yo. Software developer from Dominican Republic.
        </p>
        <ContactInformation />
        <Divider/>

        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}

const Orbit = () => {
  return (
    <div className="  absolute h-screen w-screen flex justify-center top-[-400px]">
      <motion.div className="bg-gradient-to-t from-neutral-950/20 to-red-950/20 rounded-full  flex items-center p-2  relative justify-center   w-[700px]  h-[700px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 0.3 * 40,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{
              height: `calc(700px - ${i * 40}px)`,
              width: `calc(700px - ${i * 20}px)`,
            }}
            key={i}
            className=" rounded-full absolute  border-neutral-900 border "
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Divider = () => {
  return (
    <div className="flex items-center gap-1">
      <hr className="w-1 h-1 rounded-full border-0 bg-neutral-700 my-3" />
      <hr className="w-1 h-1 rounded-full border-0 bg-neutral-700 my-3" />
      <hr className="w-1 h-1 rounded-full border-0 bg-neutral-700 my-3" />
    </div>
  );
};

const ContactInformation = () => {
  return (
    <div>
      Text me on{" "}
      <a
        href="https://www.instagram.com/fka.breiddy/"
        className="underline text-blue-700"
      >
        Instagram
      </a>{" "}
      or{" "}
      <a
        className="underline text-blue-700"
        href="mailto:breiddysubzero@gmail.com"
      >
        mail me
      </a>{" "}
      see my work at   {" "}
        <a   
        className="underline text-blue-700"
        href="https://github.com/fkabreiddy">
             Github
        </a>
    </div>
  );
};
