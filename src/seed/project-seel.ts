
export interface Project{
    name: string;
    tags: string[];
    description: string;
    link: string | null;
    date: Date;
    personalProject: boolean,
    onDevelopment: boolean,
    attachedFiles: ProjectImage[];
}

interface ProjectImage {
    src: string;
    alt: string;
}


export const projects : Project[] = [
    {
        name: "MetaMusic",
        personalProject: true,
        onDevelopment: false,
        tags: ["Blazor", ".Net", "Asp.Net", "C#"],
        description: "A music review platform similar to Pitchfork. in Metamusic users and staff members can review albums and singles from various artists.",
        link: "https://github.com/fkabreiddy/MetaMusic",
        date: new Date("2024-01-01"),
        attachedFiles: [
            { src: "static/images/metamusic/album_info.png", alt: "Album Info" },
            { src: "static/images/metamusic/create.png", alt: "Create" },
            { src: "static/images/metamusic/creating_artist.png", alt: "Creating Artist" },
            { src: "static/images/metamusic/creating_review.png", alt: "Creating Review" },
            { src: "static/images/metamusic/home.png", alt: "Home" },
        ]
    },
    {
        name: "Portal Recursos",
         personalProject: false,
        onDevelopment: false,
        tags: ["Blazor", ".Net", "Asp.Net", "C#"],
        description: "A plataform where teachers can upload resources such as links or documents organized by subject, degree, and faculty. Students can download these resources.",
        link: null,
        date: new Date("2024-02-01"),
        attachedFiles: [
            { src: "static/images/portafolio_recursos/agregar_asignatura.jpg", alt: "Add Subject" },
            { src: "static/images/portafolio_recursos/asignaturas.jpg", alt: "Subjects" },
            { src: "static/images/portafolio_recursos/carrera.jpg", alt: "Degree" },
            { src: "static/images/portafolio_recursos/crear_usuario.jpg", alt: "Create User" },
            { src: "static/images/portafolio_recursos/editar_usuario.jpg", alt: "Edit User" },
            { src: "static/images/portafolio_recursos/facultades.jpg", alt: "Faculties" },
            { src: "static/images/portafolio_recursos/recursos.jpg", alt: "Resources" },
        ]
    },
    {
        name: "Serpentine",
         personalProject: true,
        onDevelopment: true,
        tags: [".Net", "Asp.Net", "C#", "React"],
        description: "A real time chat app on similar to Discord using .Net Signal R. Create channels and chat with people on real time.",
        link: "https://github.com/fkabreiddy/Serpentine",
        date: new Date("2025-03-01"),
        attachedFiles: [
            { src: "static/images/serpentine/serpentine-explore.png", alt: "explore", },
            { src: "static/images/serpentine/serpentine-home.png", alt: "home", },
            { src: "static/images/serpentine/serpentine-login.png", alt: "login", },
        ]
    }
];


