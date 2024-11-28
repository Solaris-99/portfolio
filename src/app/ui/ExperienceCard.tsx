import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react"
import { expItem } from "../../../public/locale/experience"
import TechIcon from "./TechIcon"
export default function ExperienceCard({exp, lang}:{exp:expItem, lang: "es"|"en"}){
    return(
        <Card className="xl:w-3/12 md:w-2/4 w-full">
            <CardHeader className="flex justify-between">
                <h4 className="text-lg text-bold">{exp.common.title} - {exp[lang].role}</h4>
                <p className="font-bold">
                    {exp.common.begin}-{exp.common.end?exp.common.end:null}
                </p>
            </CardHeader>
            <Divider></Divider>
            <CardBody>
                <p >
                    {exp[lang].description}
                </p>
                <Divider></Divider>
                <div className="project-tech-container flex justify-end mt-2">
                    {exp.common.tech?.map((e, i) => (<TechIcon techProp={e} key={i} />))}
                </div>
            </CardBody>
        </Card>
    )
}