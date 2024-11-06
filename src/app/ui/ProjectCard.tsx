import {Card, CardHeader, CardBody, Image, Chip} from "@nextui-org/react";
import { projectItem } from "../../../public/locale/projects";
import TechIcon from "./TechIcon";
// todo: project type resolver.
export default function ProjectCard({project, lang}:{project: projectItem, lang: "es"| "en"}) {
  return (
    <Card className="flex-row">
      {project.common.thumb?
      <Image src={project.common.thumb} alt={project[lang].title} className="object-cover rounded-md" />
      : null /**todo: default image */}

        <div>

        <CardHeader className="block">
          <div className="flex justify-between">
            <h4 className="font-bold text-large block">{project[lang].title}</h4>
            <Chip className="block">type</Chip>
          </div>
          <small className="block text-right">{project.common.begin.toDateString()}-{project.common.end?project.common.end.toDateString():"WIP"}</small>
        </CardHeader>
        <CardBody>
          <small>{project[lang].description}</small>
          <div className="project-tech-container flex">
            {project.common.tech?.map((e,i)=>(<TechIcon techProp={e} key={i}/>))}
          </div>
        </CardBody>
        </div>
    </Card>
  );
}