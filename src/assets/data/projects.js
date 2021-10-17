import { v4 as uuidv4 } from 'uuid';
import Odyssey from '../images/odyssey-desktop.jpg';
import Wildify from '../images/wildify-desktop.jpg';
import Stardate from '../images/stardate.png';
import ChickenNuggets from '../images/chickennuggets.png';

const projects = [
  {
    id: uuidv4(),
    name: 'RestOdyssey',
    desc:
      'Nous avons créé un site web fictif pour le restaurant de notre école, RestOdyssey, sous HTML/CSS/JS',
    img: Odyssey,
  },
  {
    id: uuidv4(),
    name: 'Wildify',
    desc:
      'Second projet en petit groupe, un site web permettant de retrouver des infos sur nos artistes/albums/musiques préférées, nommé Wildify. Nous avons utilisé React JS (avec des appels API) pour mener à bien ce projet',
    img: Wildify,
  },
  {
    id: uuidv4(),
    name: 'Stardate',
    desc:
      'Avec un de mes collègues de promo, nous avons créé ce site web pendant un Hackathon(36h). Cette page permet aux personnages de Star Wars de trouver leur âme soeur dans toute la galaxie. Nous avons utilisé React Js (avec appels API)',
    img: Stardate,
  },
  {
    id: uuidv4(),
    name: 'Chicken Nuggets',
    desc:
      'avec un petit groupe de collègues de promo, nous avons créé ce mini-jeu pendant un Hackathon(72H). Le jeu a été créé sous Unity et C#',
    img: ChickenNuggets,
  },
  {
    id: uuidv4(),
    name: 'BAC',
    desc:
      '(en cours de création)Notre premier projet pour un véritable client, nous avons utilisé React Js pour la partie Front-end, Node Js, Express et MySQL pour la partie Back-end',
    // img: ,
  },
];

export default projects;
