import { techEntry } from "@/app/enum/tech"
import { projectTypes } from "@/app/enum/project"

type projectItemCommon = {
    name: string
    begin: Date,
    type: keyof typeof projectTypes,
    codeUrl: string,
    end?: Date,
    tech?: Array<techEntry>,
    thumb?: string,
    image?: string,
    demoUrl?: string
}

export type projectItem ={
    es: {title: string, description: string},
    en: {title: string, description: string},
    common: projectItemCommon
}


//todo : add images
export const projects : Array<projectItem> = [
    {
        common: {
            name: 'factorio-website',
            type: "academic",
            begin: new Date(2023, 6, 4),
            end: new Date(2023, 6, 14),
            codeUrl: "https://github.com/Solaris-99/factorio-webpage",
            tech: ["html", "javascript", "bootstrap", "css"],
            image:"factorio.jpg",
            thumb:"factorio.jpg"
        },

        en: {
            title: "Factorio Website",
            description: "An academic project about a website of the video game factorio. It is an static site, uses HTML5, CSS3, Javascript and bootstrap.",
        },
        es: {
            title: "Factorio Website",
            description: "Un proyecto académico sobre el videojuego factorio. Es un sitio estático y usa HTML5, CSS3, Javascript y bootstrap.",
        }
    },
    {
        common: {
            name: 'java-hangman',
            type: "academic",
            begin: new Date(2023, 6, 8),
            end: new Date(2023, 6, 30),
            codeUrl: "https://github.com/Solaris-99/java-hangman",
            tech: ["java"],
            image: "ahorcado.jpg",
            thumb: "ahorcado.jpg",
        },
        en: {
            title: "Java Hangman",
            description: "Two games made in java, the hangman and a scrambled words game. Made with java 17+ and swing."
        },
        es: {
            title: "Ahorcado en Java",
            description: "Dos juegos hechos en java, el ahorcado y un juego de palabras mezcladas. Hecho con java 17+ y swing."
        },
    },
    {
        common: {
            name: 'todo-list-java',
            type: "personal",
            begin: new Date(2024, 2, 19),
            end: new Date(2024, 3, 11),
            codeUrl: "https://github.com/Solaris-99/java-toDoList",
            tech: ["java"],
            image: "todolist-java.png",
            thumb: "todolist-java.png"
        },
        en: {
            title: "Java TodoList",
            description: "A todolist app made only with java and swing."
        },
        es: {
            title: "Java TodoList",
            description: "Una aplicación de notas, hecho solo con java y swing."
        }
    },
    {
        common: {
            name: 'eventar',
            type: "academic",
            begin: new Date(2023, 9, 22),
            end: new Date(2023, 11, 18),
            codeUrl: "https://github.com/Solaris-99/EventAr",
            tech: ["html", "css", "bootstrap", "javascript", "php", "mysql"],
            image: "eventar.jpg",
            thumb: "eventar.jpg"
        },
        en: {
            title: "EventAr",
            description: "A simple php forum about local events made from the ground up, it features a functional login, register, posts and comments systems."
        },
        es: {
            title: "EventAr",
            description: "Un foro simple sobre eventos locales hecho en php desde 0. Posee sistemas funcionales de login, registro, posts y comentarios."
        },
    },
    {
        common: {
            name: "dv-PA-library",
            type: "academic",
            begin: new Date(2024, 6, 14),
            end: new Date(2024, 6, 31),
            codeUrl: "https://github.com/Solaris-99/dv-PA-library",
            tech: ["java", "mysql"],
            image: "library-manager-dv.png",
            thumb: "library-manager-dv.png"
        },
        en: {
            title: "Library-DV",
            description: "Library DV is a program to manage a bookstore. It features both user and book management, users can borrow books, and employees can mark them as returned. Books can be added in the app. Users can also register."
        },
        es: {
            title: "Library-DV",
            description: "Library-DV es una aplicación para manejar una librería. Los usuarios pueden registarse y pedir libros, mientras que los empleados pueden agregar nuevos libros y marcarlos como retornados."
        },

    },
    {
        common: {
            name: 'music-fetcher',
            type: "personal",
            begin: new Date(2024, 3, 17),
            end: new Date(2024, 4, 28),
            codeUrl: "https://github.com/Solaris-99/music-fetcher",
            tech: ["typescript", "react", "css", "tailwind", "electron", "node"],
            image: "music-fetcher.png",
            thumb: "music-fetcher.png"
        },
        en: {
            title: "MusicFetcher",
            description: "An electron app for downloading music from youtube. It is a frontend for yt-dlp. It is simple to use: search your song, and click to download."
        },
        es: {
            title: "MusicFetcher",
            description: "Una aplicación en electron para descargar música desde youtube. Es un front para yt-dlp. Es fácil de usar: sólo busca tu canción y luego haz click para descargarla."
        },
    },
    {
        common: {
            name: 'MovieCube',
            type: "academic",
            begin: new Date(2024, 4, 26),
            end: new Date(2024, 6, 26),
            codeUrl: "https://github.com/Solaris-99/tpProdWeb",
            tech: ["php", "css", "mysql", "html"],
            image: "MovieCube.png",
            thumb: "MovieCube.png"
        },
        en: {
            title: "MovieCube",
            description: "Website for a fictitious movie store MovieCube. The premise is: You buy one movie, you keep it forever. The website features fully functional login, register for users, and back office for adding movies or editing them. The buy option is also mocked. This website was made using a layer model."
        },
        es:
        {
            title: "MovieCube",
            description: "Sitio web para la tienda de películas ficticia MovieCube, donde la premisa es: Compra una película y es tuya para siempre. El sitio posee registro y login de usuarios, asi también como un backoffice para agregar y modificar las películas. La opción de comprar también esta simulada. Este sitio web fue construido usando un modelo de capas."
        }

    }
]

