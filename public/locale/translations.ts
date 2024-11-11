type locale = {
    [key: string]: {
        en: {[key:string]: string|Array<string>}
        es: {[key:string]: string|Array<string>}
    }
}


export const translations: locale = {

    home: {
        en: {
            greeting: ["Hello, I am", "Emanuel Cifuentes,", "Software Developer"],
            bio: "I am a passionate developer that likes to code a variaty of things, both professionaly and for fun.",
            projectTitle: "Projects",
            experienceTitle: "Experience",
            contactTitle: "Contact",
            contactBody: "You can contact me through any of these means",
        },
        es: {
            greeting: ["Hola, soy", "Emanuel Cifuentes,", "Software Developer"],
            bio: "Soy un desarrollador apasionado que le gusta programar varias cosas, por diversión y profesión.",
            projectTitle: "Proyectos",
            experienceTitle: "Experiencia",
            contactTitle: "Contacto",
            contactBody: "Me puedes contactar a través de cualquiera de estos medios."
        }
    },
    nav: {
        en: {
            home: "Home",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact"
        },
        es: {
            home: "Home",
            projects: "Proyectos",
            experience: "Experience",
            contact: "Contacto"
        }
    }
}
