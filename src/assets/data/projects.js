import { v4 as uuidv4 } from 'uuid';
import Odyssey from '../images/odyssey-desktop.jpg';
import Wildify from '../images/wildify-desktop.jpg';
import Stardate from '../images/stardate.png';
import sneakers from '../images/sneakers.jpg';
import ChickenNuggets from '../images/chickennuggets.png';
import dashboard from '../images/dashboard.jpg';
import cv from '../images/cvreact.jpg';
import hulu from '../images/hulu.jpg';
import projetDevOpsGLE from '../images/projetDevOpsGLE.jpg';
import homelab from '../images/homelab.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Homelab',
    desc: "Création d'un homelab permettant l'hébergement de projets personnels via des machines physiques et virtuelles, avec gestion des sauvegardes, de la sécurité et de la supervision. (Routeur -> Switch -> Raspberry Pi -> Mini PC x3)",
    img: homelab,
    link: 'https://gitlab.com/Guigan713/homelab-gle',
  },
  {
    id: uuidv4(),
    name: 'Projet DevOps GLE',
    desc: 'Déploiement d’une infrastructure DevOps complète permettant la mise en production d’une application full stack en architecture trois-tiers de manière automatisée, sécurisée et scalable sur la plateforme Google Cloud (GCP). Stack technique : Terraform, Ansible, Docker, Docker Swarm, GitHub Actions, Prometheus, Grafana, Traefik.',
    img: projetDevOpsGLE,
    link: 'https://github.com/Guigan713/projet-DevOps-gle',
  },
  {
    id: uuidv4(),
    name: 'Sneakers Portfolio',
    desc: "J'ai créé un portfolio regroupant mes travaux photos (mes créations et celles ou je suis le sujet), en utilisant React/NodeJs/MySQL",
    img: sneakers,
  },
  {
    id: uuidv4(),
    name: 'CV React',
    desc: "J'ai créé un CV avec React Js",
    img: cv,
    link: 'https://guillaume-cv-react.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Dashboard',
    desc: "J'ai créé un dashboard à l'aide de HTML5, CSS & JavaScript",
    img: dashboard,
    link: 'https://dashboard-guigan.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'RestOdyssey',
    desc: 'Nous avons créé un site web fictif pour le restaurant de notre école, RestOdyssey, sous HTML/CSS/JS',
    img: Odyssey,
    link: 'https://guigan713.github.io/restOdyssey',
  },
  {
    id: uuidv4(),
    name: 'Wildify',
    desc: 'Second projet en petit groupe, un site web permettant de retrouver des infos sur nos artistes/albums/musiques préférées, nommé Wildify. Nous avons utilisé React JS (avec des appels API) pour mener à bien ce projet',
    img: Wildify,
    link: 'https://wildify.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Stardate',
    desc: 'Avec un de mes collègues de promo, nous avons créé ce site web pendant un Hackathon(36h). Cette page permet aux personnages de Star Wars de trouver leur âme soeur dans toute la galaxie. Nous avons utilisé React Js (avec appels API)',
    img: Stardate,
  },
  {
    id: uuidv4(),
    name: 'Chicken Nuggets',
    desc: 'avec un petit groupe de collègues de promo, nous avons créé ce mini-jeu pendant un Hackathon(72H). Le jeu a été créé sous Unity et C#',
    img: ChickenNuggets,
    link: 'https://simmer.io/@DanForstesque/chicken-nuggets',
  },
  {
    id: uuidv4(),
    name: 'BAC',
    desc: 'Notre premier projet pour un véritable client, nous avons utilisé React Js pour la partie Front-end, Node Js, Express et MySQL pour la partie Back-end',
    // img: ,
  },
  {
    id: uuidv4(),
    name: 'hulu clone',
    desc: "J'ai créé un clone du website hulu à l'aide de next-js et tailwind css",
    img: hulu,
    link: 'https://hulu-2-coral-three.vercel.app/',
  },
];

export default projects;
