import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac } from 'react-icons/md';
import { FiDatabase } from 'react-icons/fi';
// import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import {
  FaCss3Alt,
  FaReact,
  FaNode,
  FaPython,
  FaCodeBranch,
  FaCogs,
  FaTools,
  FaCubes,
  FaChartLine,
  FaNetworkWired,
  FaCloud,
  FaExchangeAlt,
} from 'react-icons/fa';
import {
  DiJavascript1,
  DiGit,
  DiGoogleCloudPlatform,
  DiLinux,
} from 'react-icons/di';
import {
  SiMysql,
  SiTerraform,
  SiAmazonaws,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiPostgresql,
  SiExpress,
  SiNginx,
  SiApache,
  SiCisco,
} from 'react-icons/si';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesSectionStyle = styled.div`
  padding: 10rem 0;
  .services-items {
    display: flex;
    gap: 10rem;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 5rem;
  }
  .services-items > * {
    flex: 1 1 280px;
    min-width: 240px;
    max-width: 360px;
  }
  @media only screen and (max-width: 768px) {
    .services-items {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

function ServiceSection() {
  return (
    <ServicesSectionStyle>
      <div className="container">
        <SectionTitle
          heading="Mes Skills"
          subheading="languages et logiciels que j'utilise"
        />
        <div className="services-items">
          {/* DevOps sous-catégories deviennent des catégories */}
          <ServicesSectionItem
            icon={<FaCodeBranch />}
            title="SCM & Registry"
            icons={{ icon: <DiGit />, label: 'git' }}
            icons2={{ icon: <AiOutlineGithub />, label: 'github' }}
            icons3={{ icon: <SiGitlab />, label: 'gitlab' }}
          />
          <ServicesSectionItem
            icon={<FaCogs />}
            title="Automatisation"
            icons={{ icon: <SiTerraform />, label: 'terraform' }}
            icons2={{ icon: <SiAnsible />, label: 'ansible' }}
          />
          <ServicesSectionItem
            icon={<FaTools />}
            title="CI/CD"
            icons={{ icon: <SiGithubactions />, label: 'github actions' }}
            icons2={{ icon: <SiJenkins />, label: 'jenkins' }}
          />
          <ServicesSectionItem
            icon={<FaCubes />}
            title="Conteneurs & Orchestration"
            icons={{ icon: <SiDocker />, label: 'docker' }}
            icons2={{ icon: <SiKubernetes />, label: 'kubernetes' }}
          />
          <ServicesSectionItem
            icon={<FaChartLine />}
            title="Observabilité"
            icons={{ icon: <SiPrometheus />, label: 'prometheus' }}
            icons2={{ icon: <SiGrafana />, label: 'grafana' }}
          />
          {/* Réseau / Edge */}
          <ServicesSectionItem
            icon={<FaNetworkWired />}
            title="Réseau / Edge"
            icons={{ icon: <FaExchangeAlt />, label: 'traefik' }}
            icons2={{ icon: <SiNginx />, label: 'nginx' }}
            icons3={{ icon: <SiApache />, label: 'apache' }}
            icons4={{ icon: <SiCisco />, label: 'cisco' }}
          />
          <ServicesSectionItem
            icon={<FaCloud />}
            title="OS & Cloud"
            icons={{ icon: <DiLinux />, label: 'linux' }}
            icons2={{ icon: <SiAmazonaws />, label: 'aws' }}
            icons3={{ icon: <DiGoogleCloudPlatform />, label: 'gcp' }}
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Front-End Skills"
            icons={{ icon: <AiOutlineHtml5 />, label: 'html5' }}
            icons2={{ icon: <FaCss3Alt />, label: 'css3' }}
            icons3={{ icon: <FaReact />, label: 'react' }}
            icons4={{ icon: <DiJavascript1 />, label: 'javascript' }}
          />
          <ServicesSectionItem
            icon={<FiDatabase />}
            title="Back-End Skills"
            icons={{ icon: <FaNode />, label: 'node.js' }}
            icons2={{ icon: <SiExpress />, label: 'express.js' }}
            icons3={{ icon: <FaPython />, label: 'python' }}
          />
          <ServicesSectionItem
            icon={<FiDatabase />}
            title="Database Skills"
            icons={{ icon: <SiMysql />, label: 'mysql' }}
            icons2={{ icon: <SiPostgresql />, label: 'postgresql' }}
          />
        </div>
      </div>
    </ServicesSectionStyle>
  );
}

export default ServiceSection;
