import React from "react";
import {Modal, Button} from 'react-bootstrap'

//component
import ExpansionPanelStock from './ExpansionPanelStock'

export default function MyVerticallyCenteredModalStock(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Stock {props.fournisseur}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpansionPanelStock/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  