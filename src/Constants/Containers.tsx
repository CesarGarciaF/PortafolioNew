import dida from "../assets/projects/didactik.png";

export const HERO_CONTENT: string = `Soy una persona ágil en los momentos de estrés y me gusta desarrollar páginas web full-stack, tengo conocimientos basicos/intermedios de
tecnologías como HTML/CSS, Java, C# y frameworks cómo React y Angular entre otras tecnologías como Express.Js, NodeJs, NestJs y base de datos
como SQL y MongoDB.`;

export const ABOUT_TEXT: string = `Me considero una persona amigable con la cual no hay mucha
dificultad para empatizar, me gusta trabajar en equipo y tengo facilidad para tomar el rol de líder en proyectos.
En estos tres años de estudios de la carrera de software, he aprendido a programar diversos tipos de aplicaciones
web y móviles, además de haber adquirido bastantes habilidades blandas para poder llevar a cabo grandes o pequeños
proyectos de la mano de equipos de desarrolladores, me gusta ser activo y en el momento en el cual 
uno se tiene que enfocar para sacar el trabajo, me adapto sin ningún problema a cualquier tipo de entorno.
Tengo un nivel de inglés intermedio-avanzado y tengo un canal de YouTube en el cual subo contenido variado
pero actualmente me enfoco en subir tutoriales de canciones en guitarra acústica.`;

type Experience = 
{
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

export const EXPERIENCES: Experience[] = 
[
  {
    year: "2023 - Present",
    role: "Estudiante de Ingenieria",
    company: "UTS",
    description: `Actualmente estoy cursando la ingenieria de la carrera de software en la cual
    vemos diversas materias pero al ver las practicas en el TSU, se ven bastantes materias de desarrollo
    de proyectos.`,
    technologies: ["Android Studio", "React", "MongoDB", "SQL"],
  },
  {
    year: "2021 - 2023",
    role: "Tecnico Superior Universitario",
    company: "UTS",
    description: `En este periodo curse el grado de tecnico superior universitario en el cual
    nos sembraron las bases de la programación y aprendimos a desarrollar todo tipo de aplicaciones
    web y moviles, además de llevar materias metodologicas y matematicas entre otro tipo de ellas.`,
    technologies: ["HTML", "CSS", "C#", "mySQL", "Express.js", "Java", "Angular", "Xamarin"],
  },
  {
    year: "2018 - 2021",
    role: "Tecnico en Administración para el Emprendimiento Agropecuario",
    company: "CBTA 197",
    description: `El periodo de preparatorio aprendí a llevar a cabo procesos administrativos
    desde el punto de vista de un empleado de una empresa, hasta emprender negocios de alta 
    calidad con los recursos necesarios, también aprendi habilidades basicas de contabilidad para
    sustentar un negocio propio o de alto rango.`,
    technologies: ["Word", "PowerPoint", "Excel"],
  },
];

type Project = 
{
  title: string;
  image: string;
  description: string;
  technologies: string[];
};

export const PROJECTS: Project[] = 
[
  {
    title: "DIDACTI-K",
    image: dida,
    description:
      "Plataforma creada para docentes para la creación de planeaciónes con los nuevos campos formativos.",
    technologies: ["Angular", "Node.js", "MongoDB", "Express.js"],
  },
];

type Contact = 
{
  address: string;
  phoneNo: string;
  email: string;
};

export const CONTACT: Contact = 
{
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
