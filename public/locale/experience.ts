import { techEntry } from "@/app/enum/tech"

export type expItem = {

    en: {
        description: string,
        role: string,
    },
    es: {
        description: string,
        role: string,
    },
    common:{
        title: string,
        begin: number,
        end?: number,
        tech?: Array<techEntry>,
        icon?: string
    }
}



export const experience : Array<expItem> = [
    {
        en:{
            role: "Data Analyst",
            description:"As a data analyst, I helped create and refine several scripts related to automation, data fetching, validation and depuration",
        },
        es:{
            role: "Data Analyst",
            description:"Como analista de datos, ayudé a mi equipo a crear scripts relacionados a automatización, busqueda, validación y depuración de datos.",
        },
        common:{
            title: "Arbusta", 
            begin: 2018,
            end: 2023,
            tech:["javascript", "python", "gsuite"]
        }
    },
]