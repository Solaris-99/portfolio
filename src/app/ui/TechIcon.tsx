import { technologies, techEntry } from "../enum/tech";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
export default function TechIcon({ techProp }: { techProp: techEntry }) {
    const devIconSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"
    return (
        <Tooltip content={technologies[techProp].name}>
            <Image className="mr-0.5" width={25} height={25} alt={technologies[techProp].name} src={`${devIconSrc}${technologies[techProp].icon}`} />
        </Tooltip>
    )
}