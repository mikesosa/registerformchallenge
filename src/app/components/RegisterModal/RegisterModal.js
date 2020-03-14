import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import { Modal, Container, Row, Col } from "react-bootstrap";
import "./RegisterForm.scss";

const RegisterModal = props => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
    props.close(false);
  };

  useEffect(() => {
    setModalShow(props.show);
  }, [props.show]);

  return (
    <Modal
      size="lg"
      show={modalShow}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Container>
        <Row>
          <Col style={{ backgroundColor: "#0d2128", marginBottom: "13px" }}>
            <Modal.Header>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        <RegisterForm />
      </Container>
    </Modal>
  );
};

export default RegisterModal;
