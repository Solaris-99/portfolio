import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { projectItem } from "../../../public/locale/projects";
import { projectTypes } from "../enum/project";
import TechIcon from "./TechIcon";
import { dateParser } from "../util/dateparser";

export default function ProjectCard({ project, lang, setProject }: { project: projectItem, lang: "es" | "en", setProject: (p: projectItem)=>void }) {
 
  return (
    <div onClick={()=>{setProject(project)}} >

    <Card className="flex-row my-2 h-40 px-1 mx-1 justify-between align-middle hover:cursor-pointer hover:outline-sky-400">
      <div className="w-2/12 my-auto">
        <Image src={project.common.thumb?'/img/thumb/'+project.common.thumb:'/img/thumb/default.jpg'} width={125} height={125} alt={project[lang].title} className="object-cover rounded-md p-2" />
      </div>
      <div className="w-10/12">
        <CardHeader className="block m-0 pb-0">
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl block">{project[lang].title}</h4>
            <Chip className="block text-sm my-auto">{projectTypes[project.common.type][lang]}</Chip>
          </div>
          <small className="block text-right">{dateParser(project.common.begin)}-{project.common.end ? dateParser(project.common.end) : "WIP"}</small>
        </CardHeader>
        <CardBody >
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