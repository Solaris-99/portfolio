import { tech } from "@/app/enum/tech"
import { projectTypes } from "@/app/enum/project"

type projectItemCommon = {
    name: string
    begin: Date,
    type: projectTypes,
    codeUrl: string,
    end?: Date,
    tech?: Array<tech>,
    thumb?: string,
    image?: string,
    demoUrl?: string
}

type projectItemLocale = {
    title: string,
    description: string,
}

type projectLocale = {
    en: Array<projectItemLocale>,
    es: Array<projectItemLocale>,
    common: Array<projectItemCommon>
}

//todo : add images

export const projects: projectLocale = {
    en: [
        {
            title:"Factorio Website",
            description: "An academic project about a website of the video game factorio. It is an static site, uses HTML5, CSS3, Javascript and bootstrap.",
        },
        {
            title: "Java Hangman",
            description: "Two games made in java, the hangman and a scrambled words game. Made with java 17+ and swing."
        },
        {
            title: "Java TodoList",
            description: "A todolist app made only with java and swing."
        },
        {
            title: "EventAr",
            description: "A simple php forum about local events made from the ground up, it features a functional login, register, posts and comments systems."
        },
        {
            title: "Library-DV",
            description: "Library DV is a program to manage a bookstore. It features both user and book management, users can borrow books, and employees can mark them as returned. Books can be added in the app. Users can also register."
        },
        {
            title: "MusicFetcher",
            description: "An electron app for downloading music from youtube. It is a frontend for yt-dlp. It is simple to use: search your song, and click to download."
        },
        {
            title: "MovieCube",
            description:"Website for a fictitious movie store MovieCube. The premise is: You buy one movie, you keep it forever. The website features fully functional login, register for users, and back office for adding movies or editing them. The buy option is also mocked. This website was made using a layer model."
        }
    ],
    es: [
        {
            title:"Factorio Website",
            description: "Un proyecto académico sobre el videojuego factorio. Es un sitio estático y usa HTML5, CSS3, Javascript y bootstrap.",
        },
        {
            title:"Ahorcado en Java",
            description: "Dos juegos hechos en java, el ahorcado y un juego de palabras mezcladas. Hecho con java 17+ y swing."
        },
        {
            title: "Java TodoList",
            description:"Una aplicación de notas, hecho solo con java y swing."
        },
        {
            title:"EventAr",
            description: "Un foro simple sobre eventos locales hecho en php desde 0. Posee sistemas funcionales de login, registro, posts y comentarios."
        },
        {
            title:"Library-DV",
            description: "Library-DV es una aplicación para manejar una librería. Los usuarios pueden registarse y pedir libros, mientras que los empleados pueden agregar nuevos libros y marcarlos como retornados."
        },
        {
            title:"MusicFetcher",
            description:"Una aplicación en electron para descargar música desde youtube. Es un front para yt-dlp. Es fácil de usar: sólo busca tu canción y luego haz click para descargarla."
        },
        {
            title: "MovieCube",
            description:"Sitio web para la tienda de películas ficticia MovieCube, donde la premisa es: Compra una película y es tuya para siempre. El sitio posee registro y login de usuarios, asi también como un backoffice para agregar y modificar las películas. La opción de comprar también esta simulada. Este sitio web fue construido usando un modelo de capas."
        }

    ],
    common: [
        {
            name: 'factorio-website',
            type: projectTypes.academic,
            begin: new Date(2023,6,4),
            end: new Date(2023,6,14),
            codeUrl: "https://github.com/Solaris-99/factorio-webpage",
            tech: [tech.html, tech.javascript, tech.bootstrap, tech.css]
        },
        {
            name: 'java-hangman',
            type: projectTypes.academic,
            begin: new Date(2023,6,8),
            end: new Date(2023,6,30),
            codeUrl: "https://github.com/Solaris-99/java-hangman",
            tech: [tech.java]
        },
        {
            name: 'todo-list-java',
            type: projectTypes.personal,
            begin: new Date(2024,2,19),
            end: new Date(2024,3,11),
            codeUrl: "https://github.com/Solaris-99/java-toDoList",
            tech: [tech.java]
        },
        {
            name: 'eventar',
            type: projectTypes.academic,
            begin: new Date(2023,9,22),
            end: new Date(2023,11,18),
            codeUrl: "https://github.com/Solaris-99/EventAr",
            tech: [tech.html, tech.css, tech.bootstrap, tech.javascript, tech.php, tech.mysql]
        },
        {
            name: "dv-PA-library",
            type: projectTypes.academic,
            begin: new Date(2024,6,14),
            end: new Date(2024,6,31),
            codeUrl: "https://github.com/Solaris-99/dv-PA-library",
            tech: [tech.java, tech.mysql]
        },
        {
            name: 'music-fetcher',
            type: projectTypes.personal,
            begin: new Date(2024,3,17),
            end: new Date(2024,4,28),
            codeUrl:"https://github.com/Solaris-99/music-fetcher",
            tech: [tech.typescript, tech.react, tech.css, tech.tailwind, tech.electron, tech.node]
        },
        {
            name: 'MovieCube',
            type: projectTypes.academic,
            begin: new Date(2024,4,26),
            end: new Date(2024,6,26),
            codeUrl: "https://github.com/Solaris-99/tpProdWeb",
            tech: [tech.php, tech.css, tech.mysql, tech.html]
        }
    ]
    
}