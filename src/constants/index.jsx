import Images from "../assets";

export const navLinks = [
  {
    id: "/",
    name: "hero",
    scrollId: false,
    title: "Home",
  },
  {
    id: "/",
    name: "resume",
    scrollId: "about",
    title: "About",
  },
  {
    id: "/",
    name: "skill",
    scrollId: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    name: "socials",
    scrollId: false,
    title: "Contact",
  },
  {
    id: "contact",
    name: "form",
    scrollId: "contactForm",
    title: "Send Mail",
  },
];

const skills =
[
  {
    id: 1,
    name: "React",
    color: "#61DBFBBF",
    img: Images.react2
  },
  {
    id: 2,
    name: "Nodejs",
    color: "#3c873aBF",
    img: Images.node
  },
  {
    id: 3,
    name: "HTML",
    color: "#e34c26BF",
    img: Images.html
  },
  {
    id: 4,
    name: "CSS",
    color: "#2965f1BF",
    img: Images.css
  },
  {
    id: 5,
    name: "Javascript",
    color: "#f0db4fBF",
    img: Images.javascript
  },
  {
    id: 6,
    name: "Github",
    color: "#F1502FBF",
    img: Images.git
  },
  {
    id: 7,
    name: "Tailwind",
    color: "#06b6d4BF",
    img: Images.tailwind
  },
  {
    id: 8,
    name: "typescript",
    color: "#007ACCBF",
    img: Images.typescript
  },
  {
    id: 9,
    name: "Axios",
    color: "#a166ffBF",
    img: Images.axios
  },
  {
    id: 10,
    name: "Redux",
    color: "#764abcBF",
    img: Images.redux
  },
  {
    id: 11,
    name: "Angular",
    color: "#B52E31BF",
    img: Images.angular
  },
  {
    id: 12,
    name: "WordPress",
    color: "#21759BBF",
    img: Images.wordpress
  },
  {
    id: 13,
    name: "Bootstrap",
    color: "#553C7BBF",
    img: Images.bootstrap
  },
  {
    id: 14,
    name: "MongoDB",
    color: "#4DB33DBF",
    img: Images.mongo
  },
  {
    id: 15,
    name: "MySQL",
    color: "#00758FBF",
    img: Images.mysql
  },
  {
    id: 16,
    name: "Next",
    color: "#78C239BF",
    img: Images.next
  },
  {
    id: 17,
    name: "Express",
    color: "#000000BF",
    img: Images.express
  },
  {
    id: 18,
    name: "Sequelize",
    color: "#06AFEFBF",
    img: Images.sequelize
  },
]

const proyects =
[
  {
    id: 1,
    name: "React Portfolio V1",
    img: Images.react2,
    description: "Proyecto numero 1"
  },
  {
    id: 2,
    name: "Garibaldy Web",
    img: Images.node,
    description: "Proyecto numero 2"
  },
  {
    id: 3,
    name: "API RESTful V1",
    img: Images.html,
    description: "Proyecto numero 3"
  },
  {
    id: 4,
    name: "CRUD Angular",
    img: Images.html,
    description: "Proyecto numero 4"
  },
]

const proyectsFilters =
[
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "Angular",
  },
  {
    id: 4,
    name: "Node",
  },
]




export { skills, proyects, proyectsFilters};
