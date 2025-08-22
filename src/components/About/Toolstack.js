import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiFigma
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const ToolIcon = ({ icon: Icon, name }) => {
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

function Toolstack() {
  const tools = [
    { Icon: SiVisualstudiocode, name: 'VS Code' },
    { Icon: SiFigma, name: 'Figma' },
    { Icon: SiPostman, name: 'Postman' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: SiVercel, name: 'Vercel' }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <ToolIcon key={index} icon={tool.Icon} name={tool.name} />
      ))}
    </Row>
  );
}

export default Toolstack;