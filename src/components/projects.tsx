import { Project, projects } from "@/seed/project-seel";
import { motion } from "motion/react";
import LightBox from "./lightbox";
import { useState } from "react";

export default function Projects() {
  return (
    <section className="relative w-[90%]">
      <h2 className="mt-[30px] mb-[20px] underline">Projects i've done</h2>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
        {projects.map((proj, idx) => (
          <ProjectContainer project={proj} index={idx} />
        ))}
      </div>
    </section>
  );
}

const ProjectContainer = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3 * index,
        repeat: 0,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
      className="flex flex-col items-start m-4 gap-2"
    >
      <LightBox
        open={openLightbox}
        openChanged={setOpenLightbox}
        images={project.attachedFiles}
      />
      <div className="w-full flex justify-between">
        <label className="bg-neutral-100 font-semibold text-black px-2">
          {project.name}
        </label>
        <p className="text-[13px]">{project.date.toDateString()}</p>
      </div>
      <label>{project.onDevelopment ? "(On development)" : "(Finished)"} {project.personalProject && "(Personal project)"}</label>
      <label className="text-start">
        {project.description}{" "}
        <span>
          {project.link && 
          <>
           <a  className=" underline text-blue-700 cursor-pointer" href={project.link}>watch repository</a> {" "} / {" "}
          </>
         }
          <a  className=" underline text-blue-700 cursor-pointer" onClick={()=>{setOpenLightbox(true);}}> watch media</a>
        </span>
        
      </label>
    </motion.div>
  );
};
