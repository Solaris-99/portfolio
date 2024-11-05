type expItem = {
    title: string,
    role: string,
    description: string,
    begin: number,
    end?: number,
    tech?: Array<string>,
    icon?: string
}

type expLocale = {
    en: Array<expItem>,
    es: Array<expItem>
}

export const experience: expLocale = {
    en: [
        {
            title: "Arbusta", 
            role: "Data Analyst", 
            description:"As a data analyst, I helped create and refine several scripts related to automation, data fetching, validation and depuration",
            begin: 2018,
            end: 2023,
            tech:["Javascript", "Python", "AppScript", "Google Suite"]
        }
    ],
    es: [
        {
            title: "Arbusta", 
            role: "Data Analyst", 
            description:"Como analista de datos, ayudé a mi equipo a crear scripts relacionados a automatización, busqueda, validación y depuración de datos.",
            begin: 2018,
            end: 2023,
            tech:["Javascript", "Python", "AppScript", "Google Suite"]
        }
    ]
}