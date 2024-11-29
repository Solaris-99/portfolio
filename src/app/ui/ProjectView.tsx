import { Card, CardBody, CardHeader, Chip, Divider, Button, Link } from "@nextui-org/react";
import { projectItem } from "../../../public/locale/projects";
import { projectTypes } from "../enum/project";
import TechIcon from "./TechIcon";
import { dateParser } from "../util/dateparser";


export default function ProjectView({ project, lang }: { project: projectItem, lang: "es" | "en" }){
    return(
    <Card className="h-full p-4">
        <CardHeader className="block">
            <div className="flex w-full justify-between">
                <h2>{project[lang].title}</h2>
                <Chip className="block text-sm my-auto ">{projectTypes[project.common.type][lang]}</Chip>
            </div>
            <small className="block text-right">{dateParser(project.common.begin)}-{project.common.end ? dateParser(project.common.end) : "WIP"}</small>
        </CardHeader>
        <Divider/>
        <CardBody className="h-5/6 overflow-hidden">
            {/* image contains basepath prefix */}
            <img className="object-contain block mx-auto rounded-md mb-2" style={{width:"100%", height: "100%"}} src={project.common.image?'./img/project/'+project.common.image:'./img/project/default.jpg'}  alt={project[lang].title} />
            <p className="mb-1">{project[lang].description}</p>
            <Divider/>
            <div className="project-tech-container flex justify-between mt-2">
                <div className="flex">
                    {project.common.tech?.map((e, i) => (<TechIcon techProp={e} key={i} />))}
                </div>
                <div>
                    {
                        project.common.demoUrl?
                        <Button
                        href={project.common.demoUrl}
                        as={Link}
                        color="secondary"
                        showAnchorIcon
                        variant="solid"
                      >
                        Demo
                      </Button>:null
                    }
                    {
                        <Button
                        href={project.common.codeUrl}
                        as={Link}
                        color="primary"
                        showAnchorIcon
                        variant="solid"
                      >
                        {lang=="en"?"Code":"Ver Código"}
                      </Button>
                    }

                </div>
            </div>
        </CardBody>
    </Card>
    )
}