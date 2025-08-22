import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

const TechIcon = ({ icon: Icon, name }) => {
  const [showName, setShowName] = useState(false);

  return (
    <Col 
      xs={4} 
      md={2} 
      className="tech-icons relative"
      onClick={() => setShowName(!showName)}
    >
      <Icon />
      {showName && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-lg">
          {name}
        </div>
      )}
    </Col>
  );
};

function Techstack() {
  const skills = [
    { Icon: DiJavascript1, name: 'JavaScript' },
    { Icon: TfiHtml5, name: 'HTML5' },
    { Icon: DiCss3, name: 'CSS3' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: DiNodejs, name: 'Node.js' },
    { Icon: DiReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: DiMongodb, name: 'MongoDB' },
    { Icon: DiGit, name: 'Git' },
    { Icon: SiFirebase, name: 'Firebase' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: AiOutlineConsoleSql, name: 'SQL' }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <TechIcon key={index} icon={skill.Icon} name={skill.name} />
      ))}
    </Row>
  );
}

export default Techstack;