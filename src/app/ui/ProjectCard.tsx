import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";
import { projectItem } from "../../../public/locale/projects";
import { projectTypes } from "../enum/project";
import TechIcon from "./TechIcon";
import { dateParser } from "../util/dateparser";

export default function ProjectCard({ project, lang, setProject }: { project: projectItem, lang: "es" | "en", setProject: (p: projectItem)=>void }) {
 
  return (
    <div onClick={()=>{setProject(project)}} >

    <Card className="lg:flex-row my-2 lg:h-40 lg:w-full h-52 w-52 px-1 mx-1 justify-between align-middle hover:cursor-pointer hover:outline-sky-400">
      <div className="lg:w-2/12 my-auto mx-auto">
        <Image src={project.common.thumb?'./img/thumb/'+project.common.thumb:'./img/thumb/default.jpg'} width={125} height={125} alt={project[lang].title} className="object-cover rounded-md p-2" />
      </div>
      <div className="lg:w-10/12">
        <CardHeader className="block lg:m-0 lg:pb-0 p-3">
          <div className="flex justify-between">
            <h4 className="font-bold lg:text-2xl text-xl block text-center lg:w-fit w-full">{project[lang].title}</h4>
            <Chip className="text-sm my-auto lg:block hidden">{projectTypes[project.common.type][lang]}</Chip>
          </div>
          <small className="text-right lg:block hidden">{dateParser(project.common.begin)}-{project.common.end ? dateParser(project.common.end) : "WIP"}</small>
        </CardHeader>
        <CardBody className="lg:block hidden">
          <p className="text-sm overflow-hidden text-ellipsis line-clamp-2">{project[lang].description}</p>
          <div className="project-tech-container flex justify-end mt-2">
            {project.common.tech?.map((e, i) => (<TechIcon techProp={e} key={i} />))}
          </div>
        </CardBody>
      </div>
    </Card>
    </div>
  );
}