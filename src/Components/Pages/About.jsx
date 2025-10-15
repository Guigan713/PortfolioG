import React from 'react';
import styled from 'styled-components';
import PText from '../PText';
import Button from '../Button';
import Guillaume from '../../assets/images/Guillaume.jpg';
import AboutInfoItem from '../AboutInfoItem';
import ContactBanner from '../ContactBanner.jsx';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
  .left {
    flex: 1;
  }
  .right {
    flex: 2;
  }
  .about-subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: var(--primary);
  }
  .about-infos {
    margin-bottom: 4rem;
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about-info-items {
    margin: 15rem 5rem;
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: var(--primary);
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about-subheading {
      font-size: 1.8rem;
    }
    .about-heading {
      font-size: 2.8rem;
    }
    .about-info-heading {
      font-size: 3rem;
    }
  }
`;

function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about-subheading">
              Hi I am <span>Guillaume Lequin</span>
            </p>
            <h2 className="about-heading">Ingénieur DevOps</h2>
            <div className="about-infos">
              <PText>
                Originaire de Montceau-les-Mines en Bourgogne, j'ai grandi avec
                l'envie de voir plus grand. Mes voyages m'ont ouvert l'esprit et
                donné le goût de l'adaptation. Après un début de carrière très
                varié (vente, hôtellerie, industrie), j'ai entrepris une
                reconversion structurée par un bilan de compétences: la création
                et l'informatique s'y sont imposées. J'ai d'abord choisi le
                développement web full-stack pour apprendre à construire des
                produits utiles de bout en bout. Au fil des projets, j'ai
                découvert le DevOps et j'y ai trouvé un terrain naturel:
                automatiser, fiabiliser, livrer vite et bien. Je me suis formé
                et spécialisé (CI/CD, conteneurs, cloud, IaC) pour devenir
                ingénieur DevOps. Aujourd'hui, je m'épanouis dans un rôle où la
                technique sert la qualité, la performance et la simplicité au
                quotidien.
              </PText>
            </div>
            <Button
              btnText="Download CV"
              btnLink="/GuillaumeLequinFR.pdf"
              download
            />
          </div>
          <div className="right">
            <img src={Guillaume} alt="Guillaume" />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="O'Clock School"
              items={['Administrateur Système DevOps', '2025', 'Remote']}
            />
            <AboutInfoItem
              title="AjcFormation"
              items={['Web Developper Sharepoint C#', '2022', 'Remote']}
            />
            <AboutInfoItem
              title="Wild Code School"
              items={['Web Developper Full Stack', '2021', 'Remote']}
            />
            <AboutInfoItem
              title="Prom Hôte"
              items={['CQP assistant exploitation', '2012', 'Chagny']}
            />
            <AboutInfoItem
              title="Lycée Henri Parriat"
              items={[
                'Baccalauréat STG CFE',
                '2006-2007',
                'Montceau Les Mines',
              ]}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">Experiences</h1>
            <AboutInfoItem
              title="Ingénieur DevOps"
              items={['Makara Media', '03/2025-05/2025', 'Remote']}
            />
            <AboutInfoItem
              title="Web Developper"
              items={['Neos-Sdi', '09/01/2023-05/08/2024', 'Dijon']}
            />
            <AboutInfoItem
              title="Web developper / devops"
              items={['OP-Rate', '11/2021-02/2022', 'Remote']}
            />
            <AboutInfoItem
              title="Confectionneur/Coupeur"
              items={['Michelin', '2018-2021', 'Blanzy']}
            />
            <AboutInfoItem
              title="Réceptionniste Polyvalent"
              items={['Ibis Styles', '2014-2018', 'Beaune']}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">Hard Skills</h1>
            <AboutInfoItem
              title="DevOps"
              items={[
                'Git',
                'GitHub',
                'GitLab',
                'Terraform',
                'Ansible',
                'GitHub Actions',
                'Jenkins',
                'Docker',
                'Kubernetes',
              ]}
            />
            <AboutInfoItem
              title="Observabilité"
              items={['Prometheus', 'Grafana']}
            />
            <AboutInfoItem
              title="Réseau / Edge"
              items={['Traefik', 'Nginx', 'Apache', 'Cisco']}
            />
            <AboutInfoItem title="OS & Cloud" items={['Linux', 'AWS', 'GCP']} />
            <AboutInfoItem
              title="Outils"
              items={['NPM', 'Postman', 'Figma', 'Trello']}
            />
            <AboutInfoItem
              title="Front-End"
              items={['HTML5', 'CSS3', 'JavaScript', 'React']}
            />
            <AboutInfoItem
              title="Back-End"
              items={['Node.js', 'Express.js', 'Python']}
            />
            <AboutInfoItem
              title="Bases de données"
              items={['MySQL', 'PostgreSQL']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyle>
  );
}

export default About;
