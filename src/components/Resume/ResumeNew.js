import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdfPath = `${process.env.PUBLIC_URL}/Param_Parikh_Resume.pdf`;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: width > 786 ? "250px" : "150px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <iframe
            src={pdfPath}
            title="resume"
            width="100%"
            height={width > 786 ? "800px" : "500px"}
            style={{ border: 'none' }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;