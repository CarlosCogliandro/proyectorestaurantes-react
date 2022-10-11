import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "../Contacto/contacto-style.css";
import Carousel2 from "../Carousel2/Carousel2";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dejanos tu mensaje</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Recibir informacion de la pagina"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Contacto() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Carousel2/>
      <div className="contacto">
        <h3>
          Si te gusto el contenido de la pagina, no dudes en enviarnos un mensaje.
        </h3>
        <h4>Nos pondremos en contacto lo antes posible</h4>
        <Button
          variant="success"
          onClick={() => setModalShow(true)}
          className="contactanos"
        >
          Contactanos
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}

export default Contacto;
